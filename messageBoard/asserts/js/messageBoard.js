const config = {
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzaG1ic2F3d3JidXljbml2Y2pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5Mjg2OTAsImV4cCI6MjA2OTUwNDY5MH0.fwRJD-WuST7mCbJf9h2i2Xk0z6mtCMCeV--JGUecC6A',
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzaG1ic2F3d3JidXljbml2Y2pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5Mjg2OTAsImV4cCI6MjA2OTUwNDY5MH0.fwRJD-WuST7mCbJf9h2i2Xk0z6mtCMCeV--JGUecC6A',
    //apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIzOTg2MzAwNSwiaWF0IjoxNzAxOTQzMDA1LCJpc3MiOiJzdXBhYmFzZSJ9.LYLqWA0Ov-yKdFBXksbu3JNnldMOM-7Kth3LPFhLmA8',
    //authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIzOTg2MzAwNSwiaWF0IjoxNzAxOTQzMDA1LCJpc3MiOiJzdXBhYmFzZSJ9.LYLqWA0Ov-yKdFBXksbu3JNnldMOM-7Kth3LPFhLmA8',
    prefer: 'return=minimal',
//    baseUrl: 'https://cnlchrq5g6hen2t5llr0.baseapi.memfiredb.com'
    baseUrl: 'https://dshmbsawwrbuycnivcjs.supabase.co'
};


// 显示遮罩层的函数
function showLoadingOverlay() {
    const overlay = document.createElement('div');
    overlay.id = "loadingOverlay"; // 添加一个 ID 方便后续操作
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '9999';

    const loadingText = document.createElement('div');
    loadingText.style.color = 'white';
    loadingText.style.fontSize = '20px';
    loadingText.innerHTML = 'Operation in progress...<br><br>Please wait';

    overlay.appendChild(loadingText);
    document.body.appendChild(overlay);
}

// 隐藏遮罩层的函数
function hideLoadingOverlay() {
    const overlay = document.getElementById("loadingOverlay");
    if (overlay) {
        document.body.removeChild(overlay);
    }
}

document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var access_token = getCookie('access_token');
    if (!access_token) {
        alert('You must be logged in to post a comment.');
        return;
    }

    var message = document.getElementById('message').value;
    var authUserId = getCookie('user_id'); // 从cookie中获取user_id

    // 显示遮罩层
    showLoadingOverlay();

    // Fetch the username and id from the user_id
    fetch(`${config.baseUrl}/rest/v1/users?select=id,username&user_id=eq.${authUserId}`, {
        method: 'GET',
        headers: {
            'apikey': config.apiKey,
            'Authorization': config.authorization,
            'Prefer': config.prefer
        }
    })
    .then(function(response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error: ' + response.statusText);
        }
    })
    .then(function(data) {
        if (data.length > 0) {
            var username = data[0].username;
            var legacy_user_id = data[0].id;

            // Create a new message
            fetch(`${config.baseUrl}/rest/v1/messages`, {
                method: 'POST',
                headers: {
                    'apikey': config.apiKey,
                    'Authorization': `Bearer ${getCookie('access_token')}`, // 使用 cookie 中的 token
                    'Content-Type': 'application/json',
                    'Prefer': config.prefer
                },
                body: JSON.stringify({
                    legacy_user_id: legacy_user_id,
                    message: message
                })
            })
            .then(function(response) {
                if (response.ok) {
                    console.log('Message posted successfully');
                    // Reload the iframe to update the messages
                    var iframe = document.querySelector('#messages iframe');
                    iframe.src = iframe.src;
                } else {
                    console.log('Message posting failed');
                }
            })
            .catch(function(error) {
                console.error('Error:', error);
            });
        } else {
            console.log('User not found');
        }
    })
    .catch(function(error) {
        console.error('Error fetching user:', error);
    })
    .finally(() => {
        // 隐藏遮罩层
        hideLoadingOverlay();
    });
});

// 获取cookie的函数
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


// 在文档加载完成后立即检查是否登录，并显示提示
window.addEventListener('DOMContentLoaded', function() {
    var access_token = getCookie('access_token');
    if (!access_token) {
        document.getElementById('loginSuggest').style.display = 'block';
    }
});