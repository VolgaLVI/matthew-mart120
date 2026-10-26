var eyeRightX = 235;
var eyeRightY = 160;

const eyeRightXOffset = 10;
const eyeRightYOffset = -10;


var eyeLeftX = 175;
var eyeLeftY = 160;

const eyeLeftXOffset = 10;
const eyeLeftYOffset = -10;


var eyesXSpeed = 3
var eyesYSpeed = 3
var eyesXOffsetLoop = 0;
var eyesYOffsetLoop = -200;



var eyebrowRightX = 220;
var eyebrowRightY = 138;

var eyebrowLeftX = 162;
var eyebrowLeftY = 140;

const eyebrowXOffset = 5;
const eyebrowYOffset = -15;

var eyebrowsSpeed = 2
var eyebrowsDiagonalOffsetLoop = 0;



var titleSize = 1;
var titleSizeLoop = 0;


function setup() {
	createCanvas(400,400);
}

function draw() {
	background(220);
	
	eyesXOffsetLoop += 1;
	
	if (eyesXOffsetLoop >= 100 && eyesXOffsetLoop <= (100 + 35 / eyesXSpeed)) {
		eyeRightX += eyeRightXOffset / (35 / eyesXSpeed);
		eyeLeftX += eyeLeftXOffset / (35 / eyesXSpeed);
	}
	else if (eyesXOffsetLoop >= 300 && eyesXOffsetLoop <= (300 + 35 / eyesXSpeed)) {
		eyeRightX -= eyeRightXOffset / (35 / eyesXSpeed);
		eyeLeftX -= eyeLeftXOffset / (35 / eyesXSpeed);
	}
	else if (eyesXOffsetLoop > 700) {
		eyesXOffsetLoop = 0;
		eyesXSpeed = 0.5 + Math.random() + Math.random();
	}
	
	eyesYOffsetLoop += 1;
	
	if (eyesYOffsetLoop >= 211 && eyesYOffsetLoop <= (211 + 45 / eyesYSpeed)) {
		eyeRightY += eyeRightYOffset / (45 / eyesYSpeed);
		eyeLeftY += eyeLeftYOffset / (45 / eyesYSpeed);
	}
	else if (eyesYOffsetLoop >= 444 && eyesYOffsetLoop <= (444 + 45 / eyesYSpeed)) {
		eyeRightY -= eyeRightYOffset / (45 / eyesYSpeed);
		eyeLeftY -= eyeLeftYOffset / (45 / eyesYSpeed);
	}
	else if (eyesYOffsetLoop > 500) {
		eyesYOffsetLoop = 0;
		eyesYSpeed = 0.5 + Math.random() + Math.random();
	}
	
	
	eyebrowsDiagonalOffsetLoop += 1;
	
	if (eyebrowsDiagonalOffsetLoop >= 211 && eyebrowsDiagonalOffsetLoop <= (211 + 10 / eyebrowsSpeed)) {
		eyebrowRightX += eyebrowXOffset / (10 / eyebrowsSpeed);
		eyebrowLeftX += eyebrowXOffset / (10 / eyebrowsSpeed);
		eyebrowRightY += eyebrowYOffset / (10 / eyebrowsSpeed);
		eyebrowLeftY += eyebrowYOffset / (10 / eyebrowsSpeed);
	}
	else if (eyebrowsDiagonalOffsetLoop >= 444 && eyebrowsDiagonalOffsetLoop <= (444 + 10 / eyebrowsSpeed)) {
		eyebrowRightX -= eyebrowXOffset / (10 / eyebrowsSpeed);
		eyebrowLeftX -= eyebrowXOffset / (10 / eyebrowsSpeed);
		eyebrowRightY -= eyebrowYOffset / (10 / eyebrowsSpeed);
		eyebrowLeftY -= eyebrowYOffset / (10 / eyebrowsSpeed);
	}
	else if (eyebrowsDiagonalOffsetLoop > 500) {
		eyebrowsDiagonalOffsetLoop = 0;
		eyebrowsSpeed = 0.5 + Math.random() + Math.random();
	}
	
	
	titleSizeLoop += 1;
	if (titleSizeLoop > 0 && titleSizeLoop % 20 == 0) {
		titleSize += 0.1;
	}
	else if (titleSizeLoop < 0 && titleSizeLoop % 20 == 0) {
		titleSize -= 0.1;
	}
	
	if (titleSizeLoop > 100) {
		titleSizeLoop = -120;
	}
	
  
	fill(0, 0, 0);
	textSize(12);
	text("x: " + round(mouseX) + ", y: " + round(mouseY), 10, 20);
	
	fill(230, 210, 163);
	rect(210, 245, 30, 30);
	
	fill(125, 105, 60);
	circle(225, 144, 210);
	
	fill(230, 210, 163);
	circle(222, 150, 200);
	
	fill(24, 25, 26);
	rect(112, 264, 45, 230);
	rect(152, 260, 145, 230);
	rect(282, 264, 45, 230);
	
	
	fill(255, 255, 255);
	circle(180, 160, 35);
	
	fill(36, 44, 48);
	circle(eyeLeftX, eyeLeftY, 12);
	
	fill(255, 255, 255);
	circle(240, 160, 35);
	
	fill(36, 44, 48);
	circle(eyeRightX, eyeRightY, 12);
	
	fill(36, 44, 48);
	
	line(eyebrowLeftX, eyebrowLeftY, eyebrowLeftX + 28, eyebrowLeftY - 2);
	line(eyebrowRightX, eyebrowRightY, eyebrowRightX + 40, eyebrowRightY + 2);
	
	triangle(208, 173, 199, 192, 216, 192);
	
	point(183, 218);
	point(189, 220);
	point(194, 222);
	point(199, 224);
	point(204, 226);
	point(209, 224);
	point(214, 222);
	point(219, 220);
	point(224, 218);
	
	fill(125, 105, 60);
	ellipse(220, 59, 90, 35);
	
	ellipse(225, 74, 150, 35);
	
	ellipse(161, 90, 40, 60);
	ellipse(151, 100, 40, 60);
	ellipse(141, 110, 40, 60);
	ellipse(131, 150, 40, 90);
	
	ellipse(281, 90, 40, 60);
	ellipse(291, 100, 40, 60);
	ellipse(301, 110, 40, 60);
	ellipse(311, 150, 40, 90);
	
	
	fill(255, 255, 255);
	textSize(16 * titleSize);
	text("self portrait", 17 - (17 * (titleSize - 1)), 342);
	textSize(6 * titleSize);
	text("matthew loman", 36 - (18 * (titleSize - 1)), 352);
	
	
	
	console.log("hi");
}
