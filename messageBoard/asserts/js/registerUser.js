const config = {
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzI4NjY4NTY3OSwiaWF0IjoxNzA5ODg1Njc5LCJpc3MiOiJzdXBhYmFzZSJ9.Y3loZqk0iqgFwofs_Sa107YheczRlttX_ZTOMboaf7c',
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzI4NjY4NTY3OSwiaWF0IjoxNzA5ODg1Njc5LCJpc3MiOiJzdXBhYmFzZSJ9.Y3loZqk0iqgFwofs_Sa107YheczRlttX_ZTOMboaf7c',
    prefer: 'return=minimal',
    baseUrl: 'https://cnlchrq5g6hen2t5llr0.baseapi.memfiredb.com'
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
            console.log('Signup request sent successfully');
            return Promise.resolve();
        } else {
            throw new Error('Error: ' + response.statusText);
        }
    })
    .catch(function(error) {
        console.error('Error sending signup request:', error);
        return Promise.reject(error);
    });
}

// registerUser插入user数据表
function registerUser(username, email, password) {
    if (!/^\d{4}$/.test(password)) {
        alert('Password must be 4 digits');
        return;
    }

    fetch(`${config.baseUrl}/rest/v1/users`, {
        method: 'POST',
        headers: {
            'apikey': config.apiKey,
            'Authorization': config.authorization,
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
        .then(() => {
            registerUser(username, email, password);
        })
        .catch((error) => {
            console.error('Signup request failed:', error);
        });
});

function showTooltip() {
    document.getElementById('tooltip').style.display = 'block';
}