const config = {
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kdGNuc3hldnRsb3V4aWx2aXNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MTEyNjQsImV4cCI6MjA2MjE4NzI2NH0.lQzKoW-SpDlQ1JqrbnwOo-3vTPI53hFMMWbkHzXy9f4',
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kdGNuc3hldnRsb3V4aWx2aXNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MTEyNjQsImV4cCI6MjA2MjE4NzI2NH0.lQzKoW-SpDlQ1JqrbnwOo-3vTPI53hFMMWbkHzXy9f4',
    //apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIzOTg2MzAwNSwiaWF0IjoxNzAxOTQzMDA1LCJpc3MiOiJzdXBhYmFzZSJ9.LYLqWA0Ov-yKdFBXksbu3JNnldMOM-7Kth3LPFhLmA8',
    //authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIzOTg2MzAwNSwiaWF0IjoxNzAxOTQzMDA1LCJpc3MiOiJzdXBhYmFzZSJ9.LYLqWA0Ov-yKdFBXksbu3JNnldMOM-7Kth3LPFhLmA8',
    prefer: 'return=minimal',
//    baseUrl: 'https://cnlchrq5g6hen2t5llr0.baseapi.memfiredb.com'
    baseUrl: 'https://mdtcnsxevtlouxilvisn.supabase.co'
};

function reversibleHash4to6(str) {
    const primeMultiplier = 7;
    const offset = 100000;
    const num = parseInt(str, 10);
    const hash = ((num * primeMultiplier) + offset) % 1000000;
    return hash.toString().padStart(6, '0');
}
function reversibleHash6to4(hashStr) {
    const primeMultiplier = 7;
    const offset = 100000;
    const hash = parseInt(hashStr, 10);
    const original = ((hash - offset) / primeMultiplier) | 0;
    return original.toString().padStart(4, '0');
}

// 发送注册请求
function sendSignupRequest(email, password) {
    const hashedPassword = reversibleHash4to6(password);
    const url = `${config.baseUrl}/auth/v1/signup?apikey=${config.apiKey}&Content-Type=application/json`;

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: hashedPassword
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
        const userToken = data.access_token;
        const userId = data.id;
        document.cookie = `access_token=${userToken}; path=/; secure;`;
        document.cookie = `user_id=${userId}; path=/; secure;`;
        console.log('Cookie has been set. Cookie content:', getCookie('access_token'), getCookie('user_id')); // 打印cookie内容
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
            'Authorization': `Bearer ${access_token}`, //使用注册返回的access_token
            'apikey': config.apiKey,
            'Content-Type': 'application/json',
            'Prefer': config.prefer
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
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
            const accessToken = responseData.access_token;
            registerUser(username, email, password, accessToken); // 使用access_token
        })
        .catch(function(error) {
            console.error('Signup request failed:', error);
        });
});

function showTooltip() {
    document.getElementById('tooltip').style.display = 'block';
}

// 获取cookie的函数
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}