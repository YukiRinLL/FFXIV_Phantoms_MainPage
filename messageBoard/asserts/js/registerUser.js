// registerUser.js
// 依赖：assets/js/config.js, utils.js（通过 shared-loader.js 加载）

// 从全局配置获取（如果未加载则使用回退值）
const config = {
    apiKey: (window.APP_CONFIG && window.APP_CONFIG.ANON_KEY) || '',
    authorization: 'Bearer ' + ((window.APP_CONFIG && window.APP_CONFIG.ANON_KEY) || ''),
    prefer: 'return=minimal',
    baseUrl: (window.APP_CONFIG && window.APP_CONFIG.SUPABASE_URL) || 'https://dshmbsawwrbuycnivcjs.supabase.co'
};

// 发送注册请求
function reversibleHash4to6(str) {
    const primeMultiplier = 7;
    const offset = 100000;
    const num = parseInt(str, 10);
    const hash = ((num * primeMultiplier) + offset) % 1000000;
    return hash.toString().padStart(6, '0');
}

function sendSignupRequest(email, password) {
    const url = `${config.baseUrl}/auth/v1/signup`;
    const legacyPassword = reversibleHash4to6(password);

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            , 'apikey': config.apiKey
        },
        body: JSON.stringify({
            email: email,
            password: legacyPassword
        })
    })
    .then(function(response) {
        if (response.ok) {
            return response.json(); // 解析JSON
        } else {
            throw new Error('Error: ' + response.statusText);
        }
    })
    .then(function(data) { // 这里处理解析后的JSON对象
        //console.log(data);
        if (data.access_token && data.user) {
            sessionStorage.setItem('supabase_access_token', data.access_token);
            sessionStorage.setItem('supabase_user_id', data.user.id);
        }
        return data; // 确保返回解析后的data对象
    })
    .catch(function(error) {
        console.error('Error sending signup request:', error);
        return Promise.reject(error);
    });
}

// registerUser插入user数据表
function registerUser(username, email, password, access_token) {
    if (!/^\d{4}$/.test(password)) {
        alert('Password must be 4 digits');
        return;
    }

    fetch(`${config.baseUrl}/rest/v1/users`, {
        method: 'POST',
        headers: {
            'apikey': config.apiKey,
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json',
            'Prefer': config.prefer
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
        })
    })
    .then(function(response) {
        if (response.ok) {
            if (confirm('User registered successfully. Do you want to upload a profile?')) {
                window.location.href = 'updateProfilie.html';
            }
            else {
                window.location.href = 'userListWithProfile_fromed.html';
            }
        } else {
            throw new Error('Error: ' + response.statusText);
        }
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    sendSignupRequest(email, password)
        .then(function(responseData) { // 确保这里处理的是解析后的JSON对象
            //console.log('responseData:', responseData); // 在控制台打印responseData
            const accessToken = responseData.access_token || '';
            registerUser(username, email, password, accessToken); // 使用access_token
        })
        .catch(function(error) {
            console.error('Signup request failed:', error);
        });
});

function showTooltip() {
    document.getElementById('tooltip').style.display = 'block';
}

// 获取cookie的函数（使用全局 CookieUtil，如果可用）
function getCookie(name) {
    if (window.CookieUtil && window.CookieUtil.get) {
        return window.CookieUtil.get(name);
    }
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}
