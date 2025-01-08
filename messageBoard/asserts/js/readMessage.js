const config = {
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFud2hyZHNud2hyZGl2YWt2dmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5MjMzNDksImV4cCI6MjA1MDQ5OTM0OX0.nULznxBpxQ7-vB8H6oBDMZitNtb0EMmXaBk_J9gw1qE',
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFud2hyZHNud2hyZGl2YWt2dmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5MjMzNDksImV4cCI6MjA1MDQ5OTM0OX0.nULznxBpxQ7-vB8H6oBDMZitNtb0EMmXaBk_J9gw1qE',
    //'apiKey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIzOTg2MzAwNSwiaWF0IjoxNzAxOTQzMDA1LCJpc3MiOiJzdXBhYmFzZSJ9.LYLqWA0Ov-yKdFBXksbu3JNnldMOM-7Kth3LPFhLmA8',
    //'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIzOTg2MzAwNSwiaWF0IjoxNzAxOTQzMDA1LCJpc3MiOiJzdXBhYmFzZSJ9.LYLqWA0Ov-yKdFBXksbu3JNnldMOM-7Kth3LPFhLmA8',
    prefer: 'return=minimal',
//    baseUrl: 'https://cnlchrq5g6hen2t5llr0.baseapi.memfiredb.com'
    baseUrl: 'https://qnwhrdsnwhrdivakvvex.supabase.co'
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
            // Fetch the username from the user_id
            fetch(`${config.baseUrl}/rest/v1/users?select=username&id=eq.${message.user_id}`, {
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
                // Add the message number
                var messageNumberDiv = document.createElement('div');
                messageNumberDiv.className = 'message-number';
                messageNumberDiv.textContent = index + 1;  // We add 1 because index is 0-based

                messagesDiv.appendChild(messageNumberDiv);

                var username = data[0].username;
                var messageDiv = document.createElement('div');
                messageDiv.className = 'message-container';

                // Add the message content
                var messageContentDiv = document.createElement('div');
                messageContentDiv.innerHTML = `
                    <p class="username"><strong>Username:</strong> ${username}</p>
                    <div class="message">${message.message}</div>
                    <p class="time"><strong>Time:</strong> ${new Date(message.created_at).toLocaleString()}</p>
                    <button onclick="updateMessage(${message.id})">Update</button>
                    <button onclick="deleteMessage(${message.id})">Delete</button>
                `;
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

function deleteMessage(messageId) {
    fetch(`${config.baseUrl}/rest/v1/messages?id=eq.${messageId}`, {
        method: 'DELETE',
        headers: {
            'apikey': config.apiKey,
            'Authorization': config.authorization,
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
                    'Authorization': config.authorization,
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