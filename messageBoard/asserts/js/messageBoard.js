// messageBoard.js
// 依赖：assets/js/config.js, utils.js（通过 shared-loader.js 加载）

// 从全局配置获取（如果未加载则使用回退值）
const config = {
    apiKey: (window.APP_CONFIG && window.APP_CONFIG.ANON_KEY) || '',
    authorization: 'Bearer ' + (sessionStorage.getItem('supabase_access_token') || ((window.APP_CONFIG && window.APP_CONFIG.ANON_KEY) || '')),
    prefer: 'return=minimal',
    baseUrl: (window.APP_CONFIG && window.APP_CONFIG.SUPABASE_URL) || 'https://dshmbsawwrbuycnivcjs.supabase.co'
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

    var access_token = sessionStorage.getItem('supabase_access_token');
    if (!access_token) {
        alert('You must be logged in to post a comment.');
        return;
    }

    var message = document.getElementById('message').value;
    var authUserId = sessionStorage.getItem('supabase_user_id');
    if (!authUserId) {
        alert('Your login session is missing the user ID. Please log in again.');
        hideLoadingOverlay();
        return;
    }

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
            return fetch(`${config.baseUrl}/rest/v1/messages`, {
                method: 'POST',
                headers: {
                    'apikey': config.apiKey,
                    'Authorization': `Bearer ${sessionStorage.getItem('supabase_access_token') || ''}`,
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
                    document.getElementById('message').value = '';
                    // Reload the iframe to update the messages
                    var iframe = document.querySelector('#messages iframe');
                    iframe.src = iframe.src;
                } else {
                    return response.text().then(function(details) {
                        throw new Error(`Message posting failed: ${response.status} ${details}`);
                    });
                }
            })
            .catch(function(error) {
                console.error('Error:', error);
                alert('Failed to post the message. Please try again.');
            });
        } else {
            throw new Error('No legacy user record found for the logged-in account.');
        }
    })
    .catch(function(error) {
        console.error('Error fetching user:', error);
        alert('Unable to find your user profile. Please log in again.');
    })
    .finally(() => {
        // 隐藏遮罩层
        hideLoadingOverlay();
    });
});

// 获取cookie的函数（使用全局 CookieUtil，如果可用）
function getCookie(name) {
    if (window.CookieUtil && window.CookieUtil.get) {
        return window.CookieUtil.get(name);
    }
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
    var access_token = sessionStorage.getItem('supabase_access_token');
    if (!access_token) {
        document.getElementById('loginSuggest').style.display = 'block';
    }
});
