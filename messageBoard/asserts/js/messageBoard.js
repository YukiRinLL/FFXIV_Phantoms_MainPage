const config = {
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzI4NjY4NTY3OSwiaWF0IjoxNzA5ODg1Njc5LCJpc3MiOiJzdXBhYmFzZSJ9.Y3loZqk0iqgFwofs_Sa107YheczRlttX_ZTOMboaf7c',
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzI4NjY4NTY3OSwiaWF0IjoxNzA5ODg1Njc5LCJpc3MiOiJzdXBhYmFzZSJ9.Y3loZqk0iqgFwofs_Sa107YheczRlttX_ZTOMboaf7c',
    prefer: 'return=minimal',
    baseUrl: 'https://cnlchrq5g6hen2t5llr0.baseapi.memfiredb.com'
};

document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var message = document.getElementById('message').value;

    // Fetch the user_id from the username
    fetch(`${config.baseUrl}/rest/v1/users?select=id&username=eq.${username}`, {
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
        var user_id = data[0].id;

        // Create a new message
        fetch(`${config.baseUrl}/rest/v1/messages`, {
            method: 'POST',
            headers: {
                'apikey': config.apiKey,
                'Authorization': config.authorization,
                'Content-Type': 'application/json',
                'Prefer': config.prefer
            },
            body: JSON.stringify({
                user_id: user_id,
                message: message
            })
        })
        .then(function(response) {
            if (response.ok) {
                console.log('message success');
                // Reload the iframe to update the messages
                var iframe = document.querySelector('#messages iframe');
                iframe.src = iframe.src;
            } else {
                console.log('message failed');
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
