const config = {
            apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzI4NjY4NTY3OSwiaWF0IjoxNzA5ODg1Njc5LCJpc3MiOiJzdXBhYmFzZSJ9.Y3loZqk0iqgFwofs_Sa107YheczRlttX_ZTOMboaf7c',
            authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzI4NjY4NTY3OSwiaWF0IjoxNzA5ODg1Njc5LCJpc3MiOiJzdXBhYmFzZSJ9.Y3loZqk0iqgFwofs_Sa107YheczRlttX_ZTOMboaf7c',
            prefer: 'return=minimal',
            baseUrl: 'https://cnlchrq5g6hen2t5llr0.baseapi.memfiredb.com'
        };

        function fetchMessages() {
            fetch(`${config.baseUrl}/rest/v1/messages`, {
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
                var messagesDiv = document.getElementById('messages');
                data.forEach(function(message, index) {
                    // Fetch the username from the legacy_user_id
                    fetch(`${config.baseUrl}/rest/v1/users?select=username&id=eq.${message.legacy_user_id}`, {
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
                        var username = data[0].username;
                        var messageDiv = document.createElement('div');
                        messageDiv.className = 'message-container';

                        // Add profile
                        var img = document.createElement('img');
                        img.src = './user_conf/default.png'; // replace with actual image URL
                        img.classList.add('profile-image');  // Add the class to the img element

                        fetch(`${config.baseUrl}/rest/v1/user_profile?select=*&legacy_user_id=eq.${message.legacy_user_id}`, {
                            method: 'GET',
                            headers: {
                                'apikey': config.apiKey,
                                'Authorization': config.authorization,
                                'Content-Type': 'application/json',
                                'Prefer': config.prefer
                            }
                        })
                        .then(response => response.json())
                        .then(profileData => {
                            if (profileData.length > 0) {
                                img.src = profileData[profileData.length - 1].data;
                            }
                        });

                        // Add the message number
                        var messageNumberDiv = document.createElement('div');
                        messageNumberDiv.className = 'message-number';
                        messageNumberDiv.textContent = index + 1;  // We add 1 because index is 0-based

                        // Add the message content
                        var messageContentDiv = document.createElement('div');
                        messageContentDiv.innerHTML = `
                            <p class="username">${username}</p>
                            <div class="message">${message.message}</div>
                            <p class="time"><strong>Time:</strong> ${new Date(message.created_at).toLocaleString()}</p>
                            <button onclick="updateMessage(${message.id})">Update</button>
                            <button onclick="deleteMessage(${message.id})">Delete</button>
                        `;

                        messageDiv.appendChild(img);
                        messagesDiv.appendChild(messageNumberDiv);
                        messageDiv.appendChild(messageContentDiv);

                        messagesDiv.appendChild(messageDiv);
                    })
                    .catch(function(error) {
                        console.error('Error:', error);
                    });
                });
            })
            .catch(function(error) {
                console.error('Error:', error);
            });
        }

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

function deleteMessage(messageId) {
    fetch(`${config.baseUrl}/rest/v1/messages?id=eq.${messageId}`, {
        method: 'DELETE',
        headers: {
            'apikey': config.apiKey,
            'Authorization': `Bearer ${getCookie('access_token')}`, // 使用 cookie 中的 token
            'Prefer': config.prefer
        }
    })
    .then(function(response) {
        if (response.ok) {
            //alert('Message deleted successfully');
            location.reload();  // Reload the page to update the messages
        } else {
            throw new Error('Error: ' + response.statusText);
        }
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
}

function updateMessage(messageId) {
    fetch(`${config.baseUrl}/rest/v1/messages?id=eq.${messageId}`, {
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
        var oldMessage = data[0].message;
        var newMessage = prompt('Enter the new message:', oldMessage);
        if (newMessage !== null) {
            fetch(`${config.baseUrl}/rest/v1/messages?id=eq.${messageId}`, {
                method: 'PATCH',
                headers: {
                    'apikey': config.apiKey,
                    'Authorization': `Bearer ${getCookie('access_token')}`, // 使用 cookie 中的 token
                    'Content-Type': 'application/json',
                    'Prefer': config.prefer
                },
                body: JSON.stringify({
                    message: newMessage
                })
            })
            .then(function(response) {
                if (response.ok) {
                    //alert('Message updated successfully');
                    location.reload();  // Reload the page to update the messages
                } else {
                    throw new Error('Error: ' + response.statusText);
                }
            })
            .catch(function(error) {
                console.error('Error:', error);
            });
        }
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
}

        fetchMessages();