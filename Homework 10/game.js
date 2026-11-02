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
	
		// Enforces object X boundaries
		if (this.x < 0) {
			this.x += canvasSize;
		}
		else if (this.x > canvasSize) {
			this.x -= canvasSize;
		}
		
		// Enforces object Y boundaries
		if (this.y < 0) {
			this.y += canvasSize;
		}
		else if (this.y > canvasSize) {
			this.y -= canvasSize;
		}
	}
	
}



const canvasSize = 800;

const playerSpeed = 4;
const playerSize = 25;
var playerX = 45;
var playerY = 65;

var obstacleCount = 4;
var obstacles = [];

function setup() {
	createCanvas(canvasSize, canvasSize);
	
	addRandomizedObstacles(obstacleCount);
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

function draw() {
	background(220);
  
	fill(0, 0, 0);
	textSize(12);
	text("x: " + round(mouseX) + ", y: " + round(mouseY), 10, 20);
	textSize(16);
	textSize(6);
	
	// Draws player
	fill(0, 0, 255);
	circle(playerX, playerY, playerSize);
	
	// Draws objects
	for (let i = 0; i < obstacles.length; i++) {
		fill(obstacles[i].colorR, obstacles[i].colorG, obstacles[i].colorB);
		rect(obstacles[i].x, obstacles[i].y, obstacles[i].xSize, obstacles[i].ySize);
	}
	
	
	// X and Y movement are separate to allow diagonal movement
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
	
	
	// Moves all objects
	for (let i = 0; i < obstacles.length; i++) {
		obstacles[i].move();
	}
	
	
	// Add exit
	// Add collision/defeat conditions
	
	// Click-to-add objects
	
	
	console.log("hi");
}
