// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";

// Game objects
var chatMessages = [];
var previousChatMessages = []; // Store previous messages for comparison
var characters = {};
var characterImages = {};
var imagePaths = [];
var availableImagePaths = [];

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/hero.png";

// Hero object
var hero = {
	speed: 256, // movement in pixels per second
	x: canvas.width / 2,
	y: canvas.height / 2,
	alpha: 1,
	messages: [], // Array of messages for hero
	userId: "3146672611", // Specific user ID for hero
	facingRight: true // Initialize facing direction
};

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Load character images
function loadCharacterImages() {
	// Predefined image paths from images/jobs directory
	imagePaths = [
		// Healer
		"images/jobs/Healer/Astrologian.png",
		"images/jobs/Healer/Sage.png",
		"images/jobs/Healer/Scholar.png",
		"images/jobs/Healer/White Mage.png",
		// Magical Ranged DPS
		"images/jobs/Magical Ranged DPS/Black Mage.png",
		"images/jobs/Magical Ranged DPS/Pictomancer.png",
		"images/jobs/Magical Ranged DPS/Red Mage.png",
		"images/jobs/Magical Ranged DPS/Summoner.png",
		// Melee DPS
		"images/jobs/Melee DPS/Dragoon.png",
		"images/jobs/Melee DPS/Monk.png",
		"images/jobs/Melee DPS/Ninja.png",
		"images/jobs/Melee DPS/Reaper.png",
		"images/jobs/Melee DPS/Samurai.png",
		"images/jobs/Melee DPS/Viper.png",
		// Physical Ranged DPS
		"images/jobs/Physical Ranged DPS/Bard.png",
		"images/jobs/Physical Ranged DPS/Dancer.png",
		"images/jobs/Physical Ranged DPS/Machinist.png",
		// Tank
		"images/jobs/Tank/Dark Knight.png",
		"images/jobs/Tank/Gunbreaker.png",
		"images/jobs/Tank/Paladin.png",
		"images/jobs/Tank/Warrior.png"
	];

	// Initialize available image paths pool
	availableImagePaths = [...imagePaths];

	// Load images
	imagePaths.forEach(function (path) {
		var imageName = path.split('/').pop();
		characterImages[imageName] = {
			ready: false,
			image: new Image()
		};
		characterImages[imageName].image.onload = function () {
			characterImages[imageName].ready = true;
		};
		characterImages[imageName].image.src = path;
	});
}

// Fetch chat messages
function fetchChatMessages() {
	fetch('https://phantoms-backend.onrender.com/onebot/latest/text')
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			processChatMessages(data);
		})
		.catch(function (error) {
			console.error('Error fetching chat messages:', error);
		});
}

// Process chat messages
function processChatMessages(messages) {
	// Save current messages as previous for comparison
	previousChatMessages = [...chatMessages];
	
	// Update chat messages
	chatMessages = messages;

	// Update characters based on messages
	updateCharacters();
}

// Parse message content
function parseMessageContent(message) {
	// First try to remove the entire prefix
	var cleanMessage = message.replace(/^\{type=text, data=\{text=/, '');
	// Remove any trailing } characters
	cleanMessage = cleanMessage.replace(/\s*}\s*}$/, '');
	// Replace newlines with spaces for better display
	cleanMessage = cleanMessage.replace(/\n/g, ' ');
	// Trim whitespace
	cleanMessage = cleanMessage.trim();
	
	// If we still have the prefix, try alternative parsing
	if (cleanMessage.includes('{type=text, data={text=')) {
		// Use a more robust regex
		var match = cleanMessage.match(/text=(.*?)(?:}$|$)/);
		if (match) {
			cleanMessage = match[1].trim().replace(/\s*}$/, '');
		}
	}
	
	return cleanMessage;
}

// Update characters based on chat messages
function updateCharacters() {
	// Get unique user IDs from current messages
	var currentActiveUserIds = {};
	chatMessages.forEach(function (message) {
		// Skip hero's user ID
		if (message.userId != hero.userId) {
			currentActiveUserIds[message.userId] = true;
		}
	});

	// Get unique user IDs from previous messages
	var previousActiveUserIds = {};
	previousChatMessages.forEach(function (message) {
		// Skip hero's user ID
		if (message.userId != hero.userId) {
			previousActiveUserIds[message.userId] = true;
		}
	});

	// Handle hero's messages separately
	var currentHeroMessages = chatMessages.filter(function (msg) {
		return msg.userId == hero.userId;
	});
	var previousHeroMessages = previousChatMessages.filter(function (msg) {
		return msg.userId == hero.userId;
	});
	
	// Add new hero messages with fade-in effect
	currentHeroMessages.forEach(function (msg) {
		var parsedMessage = parseMessageContent(msg.message);
		// Check if this message already exists
		var existingMessage = hero.messages.find(function (m) {
			return m.content === parsedMessage;
		});
		
		// Check if there's already a "..." message
		var hasEllipsis = hero.messages.some(function (m) {
			return m.content === "...";
		});
		
		if (!existingMessage) {
			// Check if message is not empty or just spaces
			if (parsedMessage.trim() !== '') {
				// Check if the new message would be "..."
				ctx.font = "12px Helvetica"; // Smaller font
				var textWidth = ctx.measureText(parsedMessage).width;
				var maxBubbleWidth = canvas.width - (hero.x + 32) - 10;
				
				if (textWidth + 16 > maxBubbleWidth) {
					// Message would be "..."
					if (!hasEllipsis) {
						// Add new message with fade-in effect
						hero.messages.push({
							content: "...",
							timeout: Date.now() + 30000, // 30 seconds
							alpha: 0, // Start with 0 for fade-in
							fadingIn: true
						});
					}
				} else {
					// Add new message with fade-in effect
					hero.messages.push({
						content: parsedMessage,
						timeout: Date.now() + 30000, // 30 seconds
						alpha: 0, // Start with 0 for fade-in
						fadingIn: true
					});
				}
			}
		}
	});
	
	// Mark disappeared hero messages for fade-out
	hero.messages.forEach(function (msg) {
		var stillExists = currentHeroMessages.some(function (chatMsg) {
			return parseMessageContent(chatMsg.message) === msg.content;
		});
		if (!stillExists && !msg.fadingOut) {
			msg.fadingOut = true;
			msg.fadingIn = false;
		}
	});
	
	// Limit number of messages for hero to 3
	if (hero.messages.length > 3) {
		// Remove oldest messages beyond 3
		hero.messages = hero.messages.slice(-3);
	}

	// Handle new users (fade-in)
	for (var userId in currentActiveUserIds) {
		if (!characters[userId]) {
			// Create new character with fade-in effect
					// Select a random image from available pool
					var randomIndex = Math.floor(Math.random() * availableImagePaths.length);
					var selectedImage = availableImagePaths[randomIndex];
					// Remove selected image from available pool
					availableImagePaths.splice(randomIndex, 1);
					// If no images left, reset the pool
					if (availableImagePaths.length === 0) {
						availableImagePaths = [...imagePaths];
					}
					var imageName = selectedImage.split('/').pop();
					// Consider 32px wall border and 52x60 character size
					var charWidth = 52;
					var charHeight = 60;
					var wallSize = 32;
					characters[userId] = {
						x: wallSize + (Math.random() * (canvas.width - wallSize * 2 - charWidth)), // Keep within bounds
						y: wallSize + (Math.random() * (canvas.height - wallSize * 2 - charHeight)), // Keep within bounds
						image: imageName,
						imagePath: selectedImage, // Store full path for later return to pool
						messages: [], // Array of messages with their own timeout and alpha
						alpha: 0, // Start with 0 for fade-in
						fadingIn: true,
						fadingOut: false,
						facingRight: true // Initialize facing direction
					};
		}

		// Update character messages
		// Get all current messages from this user
		var currentUserMessages = chatMessages.filter(function (msg) {
			return msg.userId == userId;
		});
		
		// Get all previous messages from this user
		var previousUserMessages = previousChatMessages.filter(function (msg) {
			return msg.userId == userId;
		});
		
		// Add new messages with fade-in effect
		currentUserMessages.forEach(function (msg) {
			var parsedMessage = parseMessageContent(msg.message);
			// Check if this message already exists
			var existingMessage = characters[userId].messages.find(function (m) {
				return m.content === parsedMessage;
			});
			
			// Check if there's already a "..." message
			var hasEllipsis = characters[userId].messages.some(function (m) {
				return m.content === "...";
			});
			
			if (!existingMessage) {
				// Check if message is not empty or just spaces
				if (parsedMessage.trim() !== '') {
					// Check if the new message would be "..."
					ctx.font = "12px Helvetica"; // Smaller font
					var textWidth = ctx.measureText(parsedMessage).width;
					var maxBubbleWidth = canvas.width - (characters[userId].x + 32) - 10;
					
					if (textWidth + 16 > maxBubbleWidth) {
						// Message would be "..."
						if (!hasEllipsis) {
							// Add new message with fade-in effect
							characters[userId].messages.push({
								content: "...",
								timeout: Date.now() + 30000, // 30 seconds
								alpha: 0, // Start with 0 for fade-in
								fadingIn: true
							});
						}
					} else {
						// Add new message with fade-in effect
						characters[userId].messages.push({
							content: parsedMessage,
							timeout: Date.now() + 30000, // 30 seconds
							alpha: 0, // Start with 0 for fade-in
							fadingIn: true
						});
					}
				}
			}
		});
		
		// Mark disappeared messages for fade-out
		characters[userId].messages.forEach(function (msg) {
			var stillExists = currentUserMessages.some(function (chatMsg) {
				return parseMessageContent(chatMsg.message) === msg.content;
			});
			if (!stillExists && !msg.fadingOut) {
				msg.fadingOut = true;
				msg.fadingIn = false;
			}
		});
		
		// Limit number of messages per character to 3
		if (characters[userId].messages.length > 3) {
			// Remove oldest messages beyond 3
			characters[userId].messages = characters[userId].messages.slice(-3);
		}
	}

	// Handle disappeared users (fade-out)
	for (var userId in characters) {
		if (!currentActiveUserIds[userId] && !characters[userId].fadingOut) {
			characters[userId].fadingOut = true;
			characters[userId].fadingIn = false;
		}
	}
}

// Update game objects
var update = function (modifier) {
	// Update hero position based on keyboard input
	// Consider 32px wall border and 52x60 character size
	var heroWidth = 52;
	var heroHeight = 60;
	var wallSize = 32;
	
	if (38 in keysDown) { // Player holding up
		hero.y = Math.max(wallSize, hero.y - hero.speed * modifier);
	}
	if (40 in keysDown) { // Player holding down
		hero.y = Math.min(canvas.height - wallSize - heroHeight, hero.y + hero.speed * modifier);
	}
	if (37 in keysDown) { // Player holding left
		hero.x = Math.max(wallSize, hero.x - hero.speed * modifier);
		hero.facingRight = false; // Face left
	}
	if (39 in keysDown) { // Player holding right
		hero.x = Math.min(canvas.width - wallSize - heroWidth, hero.x + hero.speed * modifier);
		hero.facingRight = true; // Face right
	}

	// Update characters
	for (var userId in characters) {
		var character = characters[userId];
		// Handle animation and transitions
		if (character.fadingIn) {
			character.alpha = Math.min(1, character.alpha + modifier * 2);
			if (character.alpha >= 1) {
				character.fadingIn = false;
			}
		} else if (character.fadingOut) {
			character.alpha = Math.max(0, character.alpha - modifier * 2);
			if (character.alpha <= 0) {
				// Return the image to available pool
				if (character.imagePath && !availableImagePaths.includes(character.imagePath)) {
					availableImagePaths.push(character.imagePath);
				}
				delete characters[userId];
			}
		} else {
			// Make character move within a small area
			if (!character.movement) {
				// Initialize movement parameters
				character.movement = {
					mode: Math.random() > 0.5 ? 'range' : 'free', // 50% chance for each mode
					direction: Math.random() * Math.PI * 2,
					speed: 20 + Math.random() * 5, // Slower speed: 5 pixels per second
					range: 100, // Larger range for range mode
					homeX: character.x,
					homeY: character.y,
					state: Math.random() > 0.7 ? 'moving' : 'idle', // 30% chance to start moving, 70% chance to start idle
					stateEndTime: Date.now() + (Math.random() > 0.7 ? 
						2000 + Math.random() * 3000 : // Moving for 2-5 seconds
						5000 + Math.random() * 10000), // Idle for 5-15 seconds
					changeDirectionTime: Date.now() + 2000 + Math.random() * 3000 // Change direction every 2-5 seconds for free mode
				};
			}

			// Check if current state has ended
			if (Date.now() > character.movement.stateEndTime) {
				// Switch state
				character.movement.state = character.movement.state === 'moving' ? 'idle' : 'moving';
				// Set new state duration
				if (character.movement.state === 'moving') {
					// Moving for 2-5 seconds
					character.movement.stateEndTime = Date.now() + 2000 + Math.random() * 3000;
					// Randomize direction when starting to move
					character.movement.direction = Math.random() * Math.PI * 2;
				} else {
					// Idle for 5-15 seconds
					character.movement.stateEndTime = Date.now() + 5000 + Math.random() * 10000;
				}
			}

			// Only move if in moving state
			if (character.movement.state === 'moving') {
				if (character.movement.mode === 'range') {
					// Range mode: move within a defined area around home position
					// Change direction periodically instead of every frame
					if (!character.movement.nextDirectionChange || Date.now() > character.movement.nextDirectionChange) {
						character.movement.direction += (Math.random() - 0.5) * Math.PI; // More significant direction change
						character.movement.nextDirectionChange = Date.now() + 1000 + Math.random() * 1000; // Change direction every 1-2 seconds
					}
					var deltaX = Math.cos(character.movement.direction) * character.movement.speed * modifier;
					character.x += deltaX;
					character.y += Math.sin(character.movement.direction) * character.movement.speed * modifier;

					// Always set facing direction to match movement direction
					if (deltaX > 0) {
						character.facingRight = true; // Face right when moving right
					} else if (deltaX < 0) {
						character.facingRight = false; // Face left when moving left
					}

					// Keep character within range of home position
					var dx = character.x - character.movement.homeX;
					var dy = character.y - character.movement.homeY;
					var distance = Math.sqrt(dx * dx + dy * dy);
					if (distance > character.movement.range) {
						// Bring character back within range
						character.x = character.movement.homeX + (dx / distance) * character.movement.range;
						character.y = character.movement.homeY + (dy / distance) * character.movement.range;
						// Reverse direction
						character.movement.direction += Math.PI;
						// Update facing direction after bounce
						var newDeltaX = Math.cos(character.movement.direction);
						character.facingRight = newDeltaX > 0;
					}
					
					// Ensure character stays within wall boundaries
					var charWidth = 52;
					var charHeight = 60;
					var wallSize = 32;
					
					character.x = Math.max(wallSize, Math.min(canvas.width - wallSize - charWidth, character.x));
					character.y = Math.max(wallSize, Math.min(canvas.height - wallSize - charHeight, character.y));
				} else {
					// Free mode: move freely around the entire map
					// Change direction periodically
					if (Date.now() > character.movement.changeDirectionTime) {
						character.movement.direction = Math.random() * Math.PI * 2;
						character.movement.changeDirectionTime = Date.now() + 2000 + Math.random() * 3000; // Change direction every 2-5 seconds
					}

					// Update position
					var deltaX = Math.cos(character.movement.direction) * character.movement.speed * modifier;
					character.x += deltaX;
					character.y += Math.sin(character.movement.direction) * character.movement.speed * modifier;

					// Always set facing direction to match movement direction
					if (deltaX > 0) {
						character.facingRight = true; // Face right when moving right
					} else if (deltaX < 0) {
						character.facingRight = false; // Face left when moving left
					}

					// Wrap around or bounce at map edges (considering character size 52x60 and 32px wall)
					var charWidth = 52;
					var charHeight = 60;
					var wallSize = 32;
					
					if (character.x < wallSize) {
						character.x = wallSize;
						character.movement.direction = Math.PI - character.movement.direction;
						// Update facing direction after bounce
						character.facingRight = true; // Now moving right
					} else if (character.x > canvas.width - wallSize - charWidth) {
						character.x = canvas.width - wallSize - charWidth;
						character.movement.direction = Math.PI - character.movement.direction;
						// Update facing direction after bounce
						character.facingRight = false; // Now moving left
					}

					if (character.y < wallSize) {
						character.y = wallSize;
						character.movement.direction = -character.movement.direction;
						// Update facing direction based on new movement
						var deltaX = Math.cos(character.movement.direction);
						character.facingRight = deltaX > 0;
					} else if (character.y > canvas.height - wallSize - charHeight) {
						character.y = canvas.height - wallSize - charHeight;
						character.movement.direction = -character.movement.direction;
						// Update facing direction based on new movement
						var deltaX = Math.cos(character.movement.direction);
						character.facingRight = deltaX > 0;
					}
				}
			}
		}

		// Handle message bubble timeouts and fade effects
		if (character.messages) {
			for (var i = character.messages.length - 1; i >= 0; i--) {
				var msg = character.messages[i];
				
				// Handle fade-in effect
				if (msg.fadingIn) {
					msg.alpha = Math.min(1, msg.alpha + modifier * 2);
					if (msg.alpha >= 1) {
						msg.fadingIn = false;
					}
				} else if (msg.fadingOut) {
					msg.alpha = Math.max(0, msg.alpha - modifier * 2);
					if (msg.alpha <= 0) {
						// Remove message when fully faded out
						character.messages.splice(i, 1);
					}
				} else if (Date.now() > msg.timeout) {
					// Start fade-out when timeout reached
					msg.fadingOut = true;
					msg.fadingIn = false;
				}
			}
		}
	}

	// Update hero messages with fade effects
	if (hero.messages) {
		for (var i = hero.messages.length - 1; i >= 0; i--) {
			var msg = hero.messages[i];
			
			// Handle fade-in effect
			if (msg.fadingIn) {
				msg.alpha = Math.min(1, msg.alpha + modifier * 2);
				if (msg.alpha >= 1) {
					msg.fadingIn = false;
				}
			} else if (msg.fadingOut) {
				msg.alpha = Math.max(0, msg.alpha - modifier * 2);
				if (msg.alpha <= 0) {
					// Remove message when fully faded out
					hero.messages.splice(i, 1);
				}
			} else if (Date.now() > msg.timeout) {
				// Start fade-out when timeout reached
				msg.fadingOut = true;
				msg.fadingIn = false;
			}
		}
	}
};

// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	// Draw characters first
	for (var userId in characters) {
		var character = characters[userId];
		if (characterImages[character.image] && characterImages[character.image].ready) {
			ctx.globalAlpha = character.alpha;
			
			// Flip image if facing right
			ctx.save();
			if (character.facingRight === true) {
				var imgWidth = characterImages[character.image].image.width;
				// Translate to center of image for flipping
				ctx.translate(character.x + imgWidth / 2, character.y);
				ctx.scale(-1, 1);
				// Draw image centered at origin
				ctx.drawImage(characterImages[character.image].image, -imgWidth / 2, 0);
			} else {
				ctx.drawImage(characterImages[character.image].image, character.x, character.y);
			}
			ctx.restore();
			ctx.globalAlpha = 1;
		}
	}

	// Draw hero
	if (heroReady) {
		ctx.globalAlpha = hero.alpha;
		
		// Flip image if facing right
		ctx.save();
		if (hero.facingRight === true) {
			// Translate to center of target size for flipping
			ctx.translate(hero.x + 26, hero.y);
			ctx.scale(-1, 1);
			var scale = 52 / 70;
			var cropY = (70 - 60/scale) / 2;
			ctx.drawImage(heroImage, 0, cropY, 70, 70 - cropY*2, -26, 0, 52, 60);
		} else {
			var scale = 52 / 70;
			var cropY = (70 - 60/scale) / 2;
			ctx.drawImage(heroImage, 0, cropY, 70, 70 - cropY*2, hero.x, hero.y, 52, 60);
		}
		ctx.restore();
		ctx.globalAlpha = 1;
	}

	// Draw chat bubbles on top
	for (var userId in characters) {
		var character = characters[userId];
		if (character.messages) {
			character.messages.forEach(function (msg, index) {
				if (msg.alpha > 0) {
					ctx.globalAlpha = msg.alpha;
					// Position bubbles above each other (newest at bottom)
					var bubbleIndex = character.messages.length - 1 - index;
					drawChatBubble(character.x + 32, character.y - 18 - (bubbleIndex * 20), msg.content);
					ctx.globalAlpha = 1;
				}
			});
		}
	}

	// Draw hero's chat bubbles
	if (hero.messages) {
		hero.messages.forEach(function (msg, index) {
			if (msg.alpha > 0) {
				ctx.globalAlpha = msg.alpha;
				// Position bubbles above hero (newest at bottom)
				var bubbleIndex = hero.messages.length - 1 - index;
				drawChatBubble(hero.x + 32, hero.y - 18 - (bubbleIndex * 24), msg.content);
				ctx.globalAlpha = 1;
			}
		});
	}
};

// Draw chat bubble
function drawChatBubble(x, y, text) {
	ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
	ctx.strokeStyle = "rgba(0, 0, 0, 0.4)";
	ctx.lineWidth = 2;

	// Calculate text width
	ctx.font = "12px Helvetica"; // font
	var padding = 4; // padding
	var maxBubbleWidth = canvas.width - x - 10;
	var bubbleHeight = 20; // bubble height

	// Adjust position to avoid off-screen
	var bubbleX = Math.max(0, x);
	var bubbleY = Math.max(0, y);

	// Check if text is too long and replace with "..."
	var displayText = text;
	var textWidth = ctx.measureText(displayText).width;
	
	if (textWidth + padding * 2 > maxBubbleWidth) {
		displayText = "...";
		textWidth = ctx.measureText(displayText).width;
	}

	var bubbleWidth = textWidth + padding * 2;

	// Draw bubble with rounded corners (compatible with all browsers)
	ctx.beginPath();
	var radius = 8; // Smaller radius
	ctx.moveTo(bubbleX + radius, bubbleY);
	ctx.lineTo(bubbleX + bubbleWidth - radius, bubbleY);
	ctx.quadraticCurveTo(bubbleX + bubbleWidth, bubbleY, bubbleX + bubbleWidth, bubbleY + radius);
	ctx.lineTo(bubbleX + bubbleWidth, bubbleY + bubbleHeight - radius);
	ctx.quadraticCurveTo(bubbleX + bubbleWidth, bubbleY + bubbleHeight, bubbleX + bubbleWidth - radius, bubbleY + bubbleHeight);
	ctx.lineTo(bubbleX + radius, bubbleY + bubbleHeight);
	ctx.quadraticCurveTo(bubbleX, bubbleY + bubbleHeight, bubbleX, bubbleY + bubbleHeight - radius);
	ctx.lineTo(bubbleX, bubbleY + radius);
	ctx.quadraticCurveTo(bubbleX, bubbleY, bubbleX + radius, bubbleY);
	ctx.fill();
	ctx.stroke();

	// Draw text
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.textAlign = "left";
	ctx.textBaseline = "middle";
	ctx.fillText(displayText, bubbleX + padding, bubbleY + bubbleHeight / 2);
}

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's start the chat room!
var then = Date.now();
loadCharacterImages();

// Fetch chat messages initially
fetchChatMessages();

// Set up periodic fetching of chat messages
setInterval(fetchChatMessages, 5000); // Every 5 seconds

main();
