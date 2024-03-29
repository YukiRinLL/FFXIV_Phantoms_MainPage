const config = {
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzI4NjY4NTY3OSwiaWF0IjoxNzA5ODg1Njc5LCJpc3MiOiJzdXBhYmFzZSJ9.Y3loZqk0iqgFwofs_Sa107YheczRlttX_ZTOMboaf7c',
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzI4NjY4NTY3OSwiaWF0IjoxNzA5ODg1Njc5LCJpc3MiOiJzdXBhYmFzZSJ9.Y3loZqk0iqgFwofs_Sa107YheczRlttX_ZTOMboaf7c',
    prefer: 'return=minimal',
    baseUrl: 'https://cnlchrq5g6hen2t5llr0.baseapi.memfiredb.com'
};

function registerUser(username, password) {
    // 检查密码是否为4位数字
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
    var password = document.getElementById('password').value;
    registerUser(username, password);
});

function showTooltip() {
    document.getElementById('tooltip').style.display = 'block';
}
