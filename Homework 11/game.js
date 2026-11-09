class Obstacle {
	
	constructor(colorR, colorG, colorB, x, y, xSize, ySize, xSpeed, ySpeed) {
		this.colorR = colorR;
		this.colorG = colorG;
		this.colorB = colorB;
		this.x = x;
		this.y = y;
		this.xSize = xSize;
		this.ySize = ySize;
		this.xSpeed = xSpeed;
		this.ySpeed = ySpeed;
	}
	
	move() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		
		
		// Enforces object X boundaries by inverting speed
		if (this.x < 0 || this.x > canvasSize) {
			this.xSpeed = -this.xSpeed;
		}
		
		// Enforces object Y boundaries by inverting speed
		if (this.y < 0 || this.y > canvasSize) {
			this.ySpeed = -this.ySpeed;
		}
	
		// Enforces object X boundaries
		// if (this.x < 0) {
		// 	this.x += canvasSize;
		// }
		// else if (this.x > canvasSize) {
		// 	this.x -= canvasSize;
		// }
		// 
		// Enforces object Y boundaries
		// if (this.y < 0) {
		// 	this.y += canvasSize;
		// }
		// else if (this.y > canvasSize) {
		// 	this.y -= canvasSize;
		// }
	}
	
}


const baseCanvasSize = 800;
var canvasSize = baseCanvasSize;

const playerSpeed = 4;
const playerSize = 25;
var playerX = 45;
var playerY = 65;

const exitSize = 40;
var exitX = 135;
var exitY = 135;

var victory = false;
var victoryCountdown = 120;
var level = 1;

var defeat = false;
var defeatCountdown = 120;

var exitLoop = 0;

const obstaclesPerLevel = 3;
var obstacleCount = 4;
var obstacles = [];

function setup() {	
	resetGame();
}

function placeExit() {
	// Places the exit. I added 10% of the canvas size on each edge as padding.
	exitX = (canvasSize * 0.5) + (Math.random() * canvasSize * 0.4);
	exitY = (canvasSize * 0.5) + (Math.random() * canvasSize * 0.4);
}
	

function addRandomizedObstacles(amount) {
	
	var speedFactor = (canvasSize / 150);
	
	for (let i = 0; i < amount; i++) {
		var xSpeed = 0;
		var ySpeed = 0;
		
		if (Math.random() > 0.75) {
			xSpeed = (speedFactor + (Math.random() * speedFactor)) * (Math.random() - 0.5);
		}
		else if (Math.random() > 0.75) {
			ySpeed = (speedFactor + (Math.random() * speedFactor)) * (Math.random() - 0.5);
		}            
		else {       
			xSpeed = (speedFactor + (Math.random() * speedFactor)) * (Math.random() - 0.5);
			ySpeed = (speedFactor + (Math.random() * speedFactor)) * (Math.random() - 0.5);
		}
		
		var red = Math.random() * 255;
		var green = Math.random() * 255;
		var blue = Math.random() * 255;
		
		var objectToAdd = new Obstacle(
								red,
								green, 
								blue,
								(canvasSize / 2) + ((Math.random() - 0.5) * canvasSize * 0.5), 
								(canvasSize / 2) + ((Math.random() - 0.5) * canvasSize * 0.5), 
								40,
								40,							
								xSpeed, 
								ySpeed
								);
		
		obstacles.push(objectToAdd);
	}
	
}

function resetGame() {
	
	obstacles = [];
	
	addRandomizedObstacles(obstacleCount);
	
	placeExit();
	
	playerX = 45;
	playerY = 65;
	
	invincibility = 60;
	
	level = 1;
	
	canvasSize = baseCanvasSize;
	createCanvas(canvasSize, canvasSize);
	
}

function progressLevel() {
	addRandomizedObstacles(obstaclesPerLevel);
	
	level += 1;
	
	placeExit();
	
	playerX = 45;
	playerY = 65;
	
	invincibility = 60;
	
	canvasSize += 25;
	createCanvas(canvasSize, canvasSize);
}

function drawPlayer() {
	// Draws player
	fill(0, 0, 255);
	circle(playerX, playerY, playerSize);
}

function drawObjects() {
	
	// Draws objects
	for (let i = 0; i < obstacles.length; i++) {
		fill(obstacles[i].colorR, obstacles[i].colorG, obstacles[i].colorB);
		rect(obstacles[i].x, obstacles[i].y, obstacles[i].xSize, obstacles[i].ySize);
	}
}

function drawExit() {
	
	fill(255, 0, 0);
	circle(exitX, exitY, exitSize);
	textSize(24);
	text("Exit", exitX - (exitSize * 0.5), exitY - (exitSize * 0.85));
	
}

function drawBorder() {
	fill(0,0,0);
	
	// Top
	rect(0, 0, canvasSize, 15);
	
	// Right
	rect(canvasSize - 15, 0, 15, canvasSize);
	
	// Bottom
	rect(0, canvasSize - 15, canvasSize, 15);
	
	// Left
	rect(0, 0, 15, canvasSize);
	
}

function drawCoordinateTracker() {
	
	fill(255, 255, 255);
	textSize(10);
	text("x: " + round(playerX) + ", y: " + round(playerY) + ". Level " + round(level), 10, 10);
}

function spawnClickObject(x, y) {
	
	console.log("Canvas clicked at:", x, y);
	var xSpeed = 0;
	var ySpeed = 0;
	
	var speedFactor = (canvasSize / 150);
	
	if (Math.random() > 0.75) {
		xSpeed = (speedFactor + (Math.random() * speedFactor)) * (Math.random() - 0.5);
	}
	else if (Math.random() > 0.75) {
		ySpeed = (speedFactor + (Math.random() * speedFactor)) * (Math.random() - 0.5);
	}            
	else {       
		xSpeed = (speedFactor + (Math.random() * speedFactor)) * (Math.random() - 0.5);
		ySpeed = (speedFactor + (Math.random() * speedFactor)) * (Math.random() - 0.5);
	}
	
	var red = Math.random() * 255;
	var green = Math.random() * 255;
	var blue = Math.random() * 255;
	
	var objectToAdd = new Obstacle(
							red,
							green, 
							blue,
							x, 
							y, 
							40,
							40,							
							xSpeed, 
							ySpeed
							);
	
	obstacles.push(objectToAdd);
	
}

function captureAndApplyPlayerMovement() {
	
	// X and Y movement are separate to allow diagonal movement
	
	if (defeat == false) {
		// X Movement
		if (keyIsDown(LEFT_ARROW)) {
			playerX -= playerSpeed;
		}
		else if (keyIsDown(RIGHT_ARROW)) {
			playerX += playerSpeed;
		}
		
		// Y Movement
		if (keyIsDown(UP_ARROW)) {
			playerY -= playerSpeed;
		}
		else if (keyIsDown(DOWN_ARROW)) {
			playerY += playerSpeed;
		}
	}
	
	
	// Enforces player X boundaries
	if (playerX < 0) {
		playerX += canvasSize;
	}
	else if (playerX > canvasSize) {
		playerX -= canvasSize;
	}
	
	// Enforces player Y boundaries
	if (playerY < 0) {
		playerY += canvasSize;
	}
	else if (playerY > canvasSize) {
		playerY -= canvasSize;
	}
}

function applyObstacleMovement() {
	if (defeat == false && victory == false) {
		for (let i = 0; i < obstacles.length; i++) {
			obstacles[i].move();
		}
	}
}

function checkObstacleCollision() {
	
	// Checks collision with obstactles. 
	// I used square logic for the player as circles will be more expensive with high object counts.
	if (defeat == false && victory == false) {
		if (invincibility <= 0) {
			for (let i = 0; i < obstacles.length; i++) {
				
				var obstacle = obstacles[i];
				
				if ((playerX > obstacle.x && playerX < obstacle.x + obstacle.xSize)
					&& (playerY > obstacle.y && playerY < obstacle.y + obstacle.ySize)) {
					defeat = true;
				}
			}
		} else {
			invincibility -= 1;
		}
	}
}
	

function victoryDefeatLogicAndDisplay() {
	
	// Draws victory text and countdown. Implements countdown as well.
	if (victory == true) {	
		fill(0, 255, 0);
		textSize(32);
		text("Level " + round(level) + " completed! Next level in: " + round((victoryCountdown + 60) / 60), (canvasSize * 0.25), canvasSize * 0.5);
		
		victoryCountdown -= 1;
		
		if (victoryCountdown <= 0) {
			victory = false;
			defeat = false;
			progressLevel();
			victoryCountdown = 120;
		}
	}
	else if (defeat == true) {
		fill(255, 0, 0);
		textSize(32);
		text("Level " + round(level) + " failed! Restarting in: " + round((defeatCountdown + 60) / 60), (canvasSize * 0.25), canvasSize * 0.5);
		
		defeatCountdown -= 1;
		
		if (defeatCountdown <= 0) {
			defeat = false;
			victory = false;
			defeatCountdown = 120;
			resetGame();
		}
	}
}

function checkPlayerVictoryStatus() {
	
	// Checks player collision with exit
	if (Math.hypot(playerX - exitX, playerY - exitY) <= (playerSize + exitSize)) {
		victory = true;
	}
	
}

function draw() {
	background(220);
	
	
	// Checks if the player has won.
	// This is separate from the victory/defeat logic because it would draw text behind objects if it was this early
	checkPlayerVictoryStatus();
	
	// Draws player
	drawPlayer();
	
	// Draws objects
	drawObjects();
	
	// Draws exit
	drawExit();
	
	// X and Y movement for the player 
	captureAndApplyPlayerMovement();
	
	
	// Moves all obstacles
	applyObstacleMovement();
	
	// Border display
	drawBorder();
	
	// Victory/defeat display and logic
	victoryDefeatLogicAndDisplay();
	
	// Checks obstacle collision 
	checkObstacleCollision();
	
	
	// Coordinate tracker
	drawCoordinateTracker();
	
	
}

function mouseClicked() {
	spawnClickObject(mouseX, mouseY);
}
