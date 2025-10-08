// 定义 Supabase 的 URL 和 API 密钥
const supabaseURL = 'https://dshmbsawwrbuycnivcjs.supabase.co';
const supabaseAPIKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzaG1ic2F3d3JidXljbml2Y2pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5Mjg2OTAsImV4cCI6MjA2OTUwNDY5MH0.fwRJD-WuST7mCbJf9h2i2Xk0z6mtCMCeV--JGUecC6A';

// 定义一个集合来存储已经显示过的消息ID
const displayedMessages = new Set();

// 定义一个集合来存储已经获取过的图片URL
const fetchedImages = new Set();

// 定义一个变量来存储定时器ID
let fetchIntervalId;

// 定义一个变量来存储系统信息
let systemInfo;

// 定义一个变量来存储图片代理服务的URL
const imageProxyUrl = 'https://res.cloudinary.com/your-cloud-name/image/fetch/';

// 语音消息代理服务（将AMR转换为MP3）
const audioProxyUrl = 'https://audio-converter.example.com/convert?url=';

// 辅助函数：将图片存储到本地缓存
function cacheImage(proxyUrl, originalUrl) {
    localStorage.setItem(originalUrl, proxyUrl);
}

// 辅助函数：回退到代理URL
function fallbackToProxy(imgElement, proxyUrl) {
    imgElement.src = proxyUrl;
}

// 页面加载时获取系统信息
function fetchSystemInfo() {
    const systemInfo = {
        browser: {
            userAgent: navigator.userAgent,
            appName: navigator.appName,
            appVersion: navigator.appVersion,
            platform: navigator.platform,
            language: navigator.language,
            cookiesEnabled: navigator.cookieEnabled,
            doNotTrack: navigator.doNotTrack,
            javaEnabled: navigator.javaEnabled(),
            onLine: navigator.onLine,
        },
        device: {
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            colorDepth: window.screen.colorDepth,
            pixelRatio: window.devicePixelRatio,
            orientation: window.screen.orientation ? window.screen.orientation.type : null,
            availableMemory: navigator.hardwareConcurrency,
            hardwareConcurrency: navigator.hardwareConcurrency,
        },
        network: {
            connection: {
                type: navigator.connection ? navigator.connection.type : null,
                downlink: navigator.connection ? navigator.connection.downlink : null,
                effectiveType: navigator.connection ? navigator.connection.effectiveType : null,
                rtt: navigator.connection ? navigator.connection.rtt : null,
            },
        },
        battery: {
            status: navigator.getBattery ? navigator.getBattery().then(battery => {
                return {
                    charging: battery.charging,
                    level: battery.level,
                    chargingTime: battery.chargingTime,
                    dischargingTime: battery.dischargingTime,
                };
            }) : null,
        },
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        plugins: navigator.plugins ? Array.from(navigator.plugins).map(plugin => plugin.name) : [],
        mimeTypes: navigator.mimeTypes ? Array.from(navigator.mimeTypes).map(mimeType => mimeType.type) : [],
        geolocation: null,
    };

    // 获取地理位置信息
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            systemInfo.geolocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                accuracy: position.coords.accuracy,
                altitude: position.coords.altitude,
                altitudeAccuracy: position.coords.altitudeAccuracy,
                heading: position.coords.heading,
                speed: position.coords.speed,
                timestamp: position.timestamp,
            };
        }, error => {
            console.error('Geolocation error:', error);
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
    }

    return systemInfo;
}

// 定义一个函数来启动定时器
function startFetchInterval() {
    // 清除之前的定时器
    if (fetchIntervalId) {
        clearInterval(fetchIntervalId);
    }
    // 设置新的定时器
    fetchIntervalId = setInterval(fetchLatestMessages, 5000);
}

// 定义一个函数来获取最新消息
async function fetchLatestMessages() {
    try {
        const response = await fetch('https://phantoms-backend.onrender.com/onebot/latest?limit=30');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const messages = await response.json();
        console.log('Received messages:', messages); // 调试信息
        displayMessages(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
    }
}

// 定义一个函数来展示消息
function displayMessages(messages) {
    const container = document.getElementById('message-container');
    container.innerHTML = ''; // 清空之前的记录

    // 按时间戳从小到大排序
    messages.reverse();

    messages.forEach(message => {
        // 检查消息是否已经显示过
        const isDisplayed = displayedMessages.has(message.id);
        // 检查这个id是否对应多条消息
        const hasMultipleMessages = messages.filter(msg => msg.id === message.id).length > 1;
        // 如果消息已经显示过，并且这个id对应的消息还有另外一条，则跳过
        if (isDisplayed && hasMultipleMessages) {
            return;
        }

        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';

        // 解析时间戳
        const timestamp = new Date(
            message.timestamp[0],
            message.timestamp[1] - 1, // 月份从 0 开始
            message.timestamp[2],
            message.timestamp[3],
            message.timestamp[4],
            message.timestamp[5],
            message.timestamp[6]
        ).toLocaleString();

        // 解析消息内容
        let displayMessage = message.message;
        if (message.message.startsWith("{type=text, data={text=")) {
            const start = message.message.indexOf("{text=") + 6;
            const end = message.message.indexOf("}}", start);
            displayMessage = message.message.substring(start, end);
        } else if (message.message.startsWith("{type=face, data={id=")) {
            const faceId = message.message.match(/id=(\d+)/)[1];
            displayMessage = `[表情 ${faceId}]`;
        } else if (message.message.startsWith("{type=image, data={")) {
            // 使用正则表达式提取图片链接
            const imageUrlMatch = message.message.match(/url=(https?:\/\/[^,]+)/);
            if (imageUrlMatch) {
                const imageUrl = imageUrlMatch[1];
                // 检查是否已经获取过该图片
                if (!fetchedImages.has(imageUrl)) {
                    fetchedImages.add(imageUrl);
                    // 使用代理路径获取图片
                    displayMessage = `<img src="${imageProxyUrl}${encodeURIComponent(imageUrl)}" alt="Image" onload="cacheImage('${imageProxyUrl}${encodeURIComponent(imageUrl)}', '${imageUrl}')">`;
                } else {
                    // 如果已经获取过，尝试从本地缓存中获取图片
                    const cachedUrl = localStorage.getItem(imageUrl);
                    if (cachedUrl) {
                        displayMessage = `<img src="${cachedUrl}" alt="Image">`;
                    } else {
                        displayMessage = `<img src="placeholder.png" alt="Image">`;
                    }
                }
            } else {
                displayMessage = "[图片链接提取失败]";
            }
        } else if (message.message.startsWith("{type=record, data={")) {
            // 处理录音消息
            const urlMatch = message.message.match(/url=(https?:\/\/[^,]+)/);
            const fileSizeMatch = message.message.match(/file_size=(\d+)/);

            if (urlMatch) {
                const audioUrl = urlMatch[1];
                const fileSize = fileSizeMatch ? parseInt(fileSizeMatch[1]) : 0;
                const fileSizeText = fileSize > 0 ? ` (${formatFileSize(fileSize)})` : '';

                displayMessage = `
                    <div class="audio-message">
                        <!-- TODO 这里获取不到音频文件，提示"file has expired"
                        <div class="audio-player">
                            <audio controls>
                                <source src="${audioProxyUrl}${encodeURIComponent(audioUrl)}&format=mp3" type="audio/mpeg">
                                <source src="${audioUrl}" type="audio/amr">
                                您的浏览器不支持音频播放
                            </audio>
                        </div>
                        -->
                        <div class="audio-info">
                            <span class="audio-icon">🎤</span>
                            <span class="audio-text">语音消息${fileSizeText}</span>
                        <!--
                            <button class="download-btn" onclick="downloadAudio('${audioUrl}', 'voice_message')">下载</button>
                        -->
                        </div>
                    </div>
                `;
            } else {
                displayMessage = "🎤 [语音消息]";
            }
        } else if (message.message.startsWith("{type=at, data={qq=")) {
            const atUserId = message.message.match(/qq=(\d+)/)[1];
            displayMessage = `<span class="at">@${atUserId}</span>`;
            const userInfo = getUserInfo(atUserId);
            displayMessage += ` <span class="user-info"><img src="http://q1.qlogo.cn/g?b=qq&nk=${atUserId}&s=100"><span>${userInfo.nickname}</span></span>`;
        } else if (message.message.startsWith("{type=reply, data={id=")) {
            const replyId = message.message.match(/id=(\d+)/)[1];
            displayMessage = `<span class="reply">[回复 ${replyId}]</span>`;
        } else if (message.message.startsWith("{type=json, data={")) {
            try {
                // 提取 JSON 数据
                const jsonData = JSON.parse(message.message.match(/{type=json, data=({.*})}/)[1]);
                const meta = jsonData.data.meta.news;

                // 构建显示内容
                displayMessage = `<div class="json-message">
                    <a href="${meta.jumpUrl}" target="_blank">
                        <img src="${meta.preview}" alt="${meta.title}" style="max-width: 200px; max-height: 200px; border-radius: 8px;">
                        <div style="font-weight: bold;">${meta.title}</div>
                        <div>${meta.desc}</div>
                    </a>
                </div>`;
            } catch (error) {
                console.error('Error parsing JSON message:', error);
                displayMessage = "[JSON 消息解析失败]";
            }
        } else {
            displayMessage = message.message; // 其他类型的消息直接显示原始内容
        }

        // 创建用户头像
        const avatarImg = document.createElement('img');
        avatarImg.className = 'user-avatar';
        avatarImg.src = `http://q1.qlogo.cn/g?b=qq&nk=${message.userId}&s=100`;

        // 创建消息内容
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.innerHTML = `<strong>${message.nickname}</strong>: ${displayMessage}`; // 使用 innerHTML 支持 HTML 内容

        // 创建时间戳
        const timestampSpan = document.createElement('span');
        timestampSpan.className = 'timestamp';
        timestampSpan.textContent = timestamp;

        // 将头像、消息内容和时间戳添加到消息容器中
        messageDiv.appendChild(avatarImg);
        messageDiv.appendChild(contentDiv);
        messageDiv.appendChild(timestampSpan);

        container.appendChild(messageDiv);

        // 记录已经显示过的消息ID
        displayedMessages.add(message.id);
    });
}

// 格式化文件大小
function formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// 下载音频文件
function downloadAudio(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename + '.amr';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// 获取用户信息
async function getUserInfo(userId) {
    const avatarUrl = `http://q1.qlogo.cn/g?b=qq&nk=${userId}&s=100`;
    const nicknameUrl = `https://r.qzone.qq.com/cgi-bin/user/cgi_userinfo_get_all?uin=${userId}`;

    try {
        const avatarResponse = await fetch(avatarUrl);
        if (!avatarResponse.ok) {
            throw new Error(`Network response was not ok: ${avatarResponse.statusText}`);
        }

        const nicknameResponse = await fetch(nicknameUrl);
        if (!nicknameResponse.ok) {
            throw new Error(`Network response was not ok: ${nicknameResponse.statusText}`);
        }
        const nicknameData = await nicknameResponse.json();

        if (nicknameData.retcode === 0) {
            return {
                nickname: nicknameData.data.nickname,
                faceimg: avatarUrl
            };
        } else {
            console.error('Failed to get user info:', nicknameData.message);
            return { nickname: "未知用户", faceimg: avatarUrl };
        }
    } catch (error) {
        console.error('Error fetching user info:', error);
        return { nickname: "未知用户", faceimg: avatarUrl };
    }
}

// 页面加载时立即获取系统信息和消息
window.onload = () => {
    fetchSystemInfo();
    fetchLatestMessages();
    startFetchInterval();
    fetchUserProfile();
};

// 获取用户信息并自动填写署名
function fetchUserProfile() {
    const userId = getCookie('user_id'); // 从cookie中获取user_id

    if (!userId) {
        console.log('No user_id found in cookies.');
        return;
    }

    fetch(`${supabaseURL}/rest/v1/users?select=username&user_id=eq.${userId}`, {
        method: 'GET',
        headers: {
            'apikey': supabaseAPIKey
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.length > 0 && data[0].username) { // 确保返回的数据中有username字段
            updateSignature(data[0].username); // 使用username更新署名
        } else {
            console.log('No username found for the user.');
            updateSignature("匿名用户"); // 如果没有找到用户名，使用默认值
        }
    })
    .catch(error => console.error('Error fetching user profile:', error));
}

// 更新署名
function updateSignature(username) {
    const signatureInput = document.getElementById('signature');
    signatureInput.value = username; // 设置署名为用户名
}

// 获取cookie
function getCookie(name) {
    let cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(name + "=") == 0) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }
    return "";
}

// 监听发送消息表单的提交事件
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const message = document.getElementById('message').value;
    const signature = document.getElementById('signature').value;

    // 格式化消息
    const formattedMessage = `[${signature}] ${message}`;

    // 重新启动定时器
    startFetchInterval();

    // 立即将消息显示在聊天记录中
    const container = document.getElementById('message-container');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';

    const avatarImg = document.createElement('img');
    avatarImg.className = 'user-avatar';
    avatarImg.src = `http://q1.qlogo.cn/g?b=qq&nk=${signature}&s=100`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = formattedMessage;

    const timestampSpan = document.createElement('span');
    timestampSpan.className = 'timestamp';
    timestampSpan.textContent = new Date().toLocaleString();

    messageDiv.appendChild(avatarImg);
    messageDiv.appendChild(contentDiv);
    messageDiv.appendChild(timestampSpan);

    // 记录已经显示过的消息ID（从页面发送的）
    displayedMessages.add(message.id);

    container.appendChild(messageDiv);

    // 发送消息和系统信息到服务器
    const url = new URL('https://phantoms-backend.onrender.com/onebot/send-to-group');
    url.searchParams.append('groupId', '787909466');
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: formattedMessage, systemInfo: systemInfo })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'ok') {
            document.getElementById('message').value = ''; // 清空输入框
        } else {
            alert('Failed to send message: ' + data.error);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the message.'+ error.message);
    });
});