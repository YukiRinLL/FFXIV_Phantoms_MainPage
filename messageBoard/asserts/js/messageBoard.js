const config = {
    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFud2hyZHNud2hyZGl2YWt2dmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5MjMzNDksImV4cCI6MjA1MDQ5OTM0OX0.nULznxBpxQ7-vB8H6oBDMZitNtb0EMmXaBk_J9gw1qE',
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFud2hyZHNud2hyZGl2YWt2dmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5MjMzNDksImV4cCI6MjA1MDQ5OTM0OX0.nULznxBpxQ7-vB8H6oBDMZitNtb0EMmXaBk_J9gw1qE',
    //apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIzOTg2MzAwNSwiaWF0IjoxNzAxOTQzMDA1LCJpc3MiOiJzdXBhYmFzZSJ9.LYLqWA0Ov-yKdFBXksbu3JNnldMOM-7Kth3LPFhLmA8',
    //authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIzOTg2MzAwNSwiaWF0IjoxNzAxOTQzMDA1LCJpc3MiOiJzdXBhYmFzZSJ9.LYLqWA0Ov-yKdFBXksbu3JNnldMOM-7Kth3LPFhLmA8',
    prefer: 'return=minimal',
//    baseUrl: 'https://cnlchrq5g6hen2t5llr0.baseapi.memfiredb.com'
    baseUrl: 'https://qnwhrdsnwhrdivakvvex.supabase.co'
};

document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var access_token = getCookie('access_token');
    if (!access_token) {
        alert('You must be logged in to post a comment.');
        return;
    }

    var message = document.getElementById('message').value;
    var authUserId = getCookie('user_id'); // 从cookie中获取user_id

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