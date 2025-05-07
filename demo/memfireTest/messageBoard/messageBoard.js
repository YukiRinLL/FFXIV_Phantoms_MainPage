//== moved from imputMessage.html ==//
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var message = document.getElementById('message').value;

    // Fetch the user_id from the username
    fetch(`https://clopdna5g6hclq1elc4g.baseapi.memfiredb.com/rest/v1/users?select=id&username=eq.${username}`, {
        method: 'GET',
        headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0eWx5d3ltam1penBqcm9qYnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1ODY5MjksImV4cCI6MjA2MjE2MjkyOX0.8HO_gvSofH87c6771WpTJOO5_J7jWx3dZ4fjw4UbiTY',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0eWx5d3ltam1penBqcm9qYnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1ODY5MjksImV4cCI6MjA2MjE2MjkyOX0.8HO_gvSofH87c6771WpTJOO5_J7jWx3dZ4fjw4UbiTY',
            //'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIzOTg2MzAwNSwiaWF0IjoxNzAxOTQzMDA1LCJpc3MiOiJzdXBhYmFzZSJ9.LYLqWA0Ov-yKdFBXksbu3JNnldMOM-7Kth3LPFhLmA8',
            //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIzOTg2MzAwNSwiaWF0IjoxNzAxOTQzMDA1LCJpc3MiOiJzdXBhYmFzZSJ9.LYLqWA0Ov-yKdFBXksbu3JNnldMOM-7Kth3LPFhLmA8',
            'Prefer': 'return=minimal'
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
        var user_id = data[0].id;

        // Create a new message
        fetch('https://clopdna5g6hclq1elc4g.baseapi.memfiredb.com/rest/v1/messages', {
            method: 'POST',
            headers: {
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0eWx5d3ltam1penBqcm9qYnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1ODY5MjksImV4cCI6MjA2MjE2MjkyOX0.8HO_gvSofH87c6771WpTJOO5_J7jWx3dZ4fjw4UbiTY',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0eWx5d3ltam1penBqcm9qYnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1ODY5MjksImV4cCI6MjA2MjE2MjkyOX0.8HO_gvSofH87c6771WpTJOO5_J7jWx3dZ4fjw4UbiTY',
                //'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIzOTg2MzAwNSwiaWF0IjoxNzAxOTQzMDA1LCJpc3MiOiJzdXBhYmFzZSJ9.LYLqWA0Ov-yKdFBXksbu3JNnldMOM-7Kth3LPFhLmA8',
                //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIzOTg2MzAwNSwiaWF0IjoxNzAxOTQzMDA1LCJpc3MiOiJzdXBhYmFzZSJ9.LYLqWA0Ov-yKdFBXksbu3JNnldMOM-7Kth3LPFhLmA8',
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
                user_id: user_id,
                message: message
            })
        })
        .then(function(response) {
            if (response.ok) {
                alert('message success');
                location.reload();  // Reload the page to update the messages
            } else {
                alert('message failed');
            }
        })
        .catch(function(error) {
            console.error('Error:', error);
        });
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
});

//== moved from readMessage.html ==//
fetch('https://clopdna5g6hclq1elc4g.baseapi.memfiredb.com/rest/v1/messages', {
    method: 'GET',
    headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0eWx5d3ltam1penBqcm9qYnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1ODY5MjksImV4cCI6MjA2MjE2MjkyOX0.8HO_gvSofH87c6771WpTJOO5_J7jWx3dZ4fjw4UbiTY',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0eWx5d3ltam1penBqcm9qYnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1ODY5MjksImV4cCI6MjA2MjE2MjkyOX0.8HO_gvSofH87c6771WpTJOO5_J7jWx3dZ4fjw4UbiTY',
        //'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIzOTg2MzAwNSwiaWF0IjoxNzAxOTQzMDA1LCJpc3MiOiJzdXBhYmFzZSJ9.LYLqWA0Ov-yKdFBXksbu3JNnldMOM-7Kth3LPFhLmA8',
        //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIzOTg2MzAwNSwiaWF0IjoxNzAxOTQzMDA1LCJpc3MiOiJzdXBhYmFzZSJ9.LYLqWA0Ov-yKdFBXksbu3JNnldMOM-7Kth3LPFhLmA8',
        'Prefer': 'return=minimal'
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
    data.forEach(function(message) {
        // Fetch the username from the user_id
        fetch(`https://clopdna5g6hclq1elc4g.baseapi.memfiredb.com/rest/v1/users?select=username&id=eq.${message.user_id}`, {
            method: 'GET',
            headers: {
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0eWx5d3ltam1penBqcm9qYnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1ODY5MjksImV4cCI6MjA2MjE2MjkyOX0.8HO_gvSofH87c6771WpTJOO5_J7jWx3dZ4fjw4UbiTY',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0eWx5d3ltam1penBqcm9qYnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1ODY5MjksImV4cCI6MjA2MjE2MjkyOX0.8HO_gvSofH87c6771WpTJOO5_J7jWx3dZ4fjw4UbiTY',
                //'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIzOTg2MzAwNSwiaWF0IjoxNzAxOTQzMDA1LCJpc3MiOiJzdXBhYmFzZSJ9.LYLqWA0Ov-yKdFBXksbu3JNnldMOM-7Kth3LPFhLmA8',
                //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIzOTg2MzAwNSwiaWF0IjoxNzAxOTQzMDA1LCJpc3MiOiJzdXBhYmFzZSJ9.LYLqWA0Ov-yKdFBXksbu3JNnldMOM-7Kth3LPFhLmA8',
                'Prefer': 'return=minimal'
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
            messageDiv.innerHTML = `
                <p><strong>Username:</strong> ${username}</p>
                <p><strong>Message:</strong> ${message.message}</p>
                <p><strong>Time:</strong> ${new Date(message.created_at).toLocaleString()}</p>
                <button onclick="updateMessage(${message.id})">Update</button>
                <button onclick="deleteMessage(${message.id})">Delete</button>
            `;
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

function deleteMessage(messageId) {
    fetch(`https://clopdna5g6hclq1elc4g.baseapi.memfiredb.com/rest/v1/messages?id=eq.${messageId}`, {
        method: 'DELETE',
        headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0eWx5d3ltam1penBqcm9qYnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1ODY5MjksImV4cCI6MjA2MjE2MjkyOX0.8HO_gvSofH87c6771WpTJOO5_J7jWx3dZ4fjw4UbiTY',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0eWx5d3ltam1penBqcm9qYnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1ODY5MjksImV4cCI6MjA2MjE2MjkyOX0.8HO_gvSofH87c6771WpTJOO5_J7jWx3dZ4fjw4UbiTY',
            //'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIzOTg2MzAwNSwiaWF0IjoxNzAxOTQzMDA1LCJpc3MiOiJzdXBhYmFzZSJ9.LYLqWA0Ov-yKdFBXksbu3JNnldMOM-7Kth3LPFhLmA8',
            //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIzOTg2MzAwNSwiaWF0IjoxNzAxOTQzMDA1LCJpc3MiOiJzdXBhYmFzZSJ9.LYLqWA0Ov-yKdFBXksbu3JNnldMOM-7Kth3LPFhLmA8',
            'Prefer': 'return=minimal'
        }
    })
    .then(function(response) {
        if (response.ok) {
            alert('Message deleted successfully');
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
    var newMessage = prompt('Enter the new message:');
    if (newMessage !== null) {
        fetch(`https://clopdna5g6hclq1elc4g.baseapi.memfiredb.com/rest/v1/messages?id=eq.${messageId}`, {
            method: 'PATCH',
            headers: {
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0eWx5d3ltam1penBqcm9qYnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1ODY5MjksImV4cCI6MjA2MjE2MjkyOX0.8HO_gvSofH87c6771WpTJOO5_J7jWx3dZ4fjw4UbiTY',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0eWx5d3ltam1penBqcm9qYnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1ODY5MjksImV4cCI6MjA2MjE2MjkyOX0.8HO_gvSofH87c6771WpTJOO5_J7jWx3dZ4fjw4UbiTY',
                //'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIzOTg2MzAwNSwiaWF0IjoxNzAxOTQzMDA1LCJpc3MiOiJzdXBhYmFzZSJ9.LYLqWA0Ov-yKdFBXksbu3JNnldMOM-7Kth3LPFhLmA8',
                //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIzOTg2MzAwNSwiaWF0IjoxNzAxOTQzMDA1LCJpc3MiOiJzdXBhYmFzZSJ9.LYLqWA0Ov-yKdFBXksbu3JNnldMOM-7Kth3LPFhLmA8',
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
                message: newMessage
            })
        })
        .then(function(response) {
            if (response.ok) {
                alert('Message updated successfully');
                location.reload();  // Reload the page to update the messages
            } else {
                throw new Error('Error: ' + response.statusText);
            }
        })
        .catch(function(error) {
            console.error('Error:', error);
        });
    }
}