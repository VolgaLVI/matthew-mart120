function setup() {
	createCanvas(400,400);
}

function draw() {
	background(220);
  
	fill(0, 0, 0);
	textSize(12);
	text("x: " + round(mouseX) + ", y: " + round(mouseY), 10, 20);
	textSize(16);
	text("self portrait", 17, 342);
	textSize(6);
	text("matthew loman", 36, 352);
	
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
	circle(175, 160, 12);
	
	fill(255, 255, 255);
	circle(240, 160, 35);
	
	fill(36, 44, 48);
	circle(235, 160, 12);
	
	fill(36, 44, 48);
	
	line(162, 140, 190, 138);
	line(220, 138, 260, 140);
	
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
	
	
	
	
	
	console.log("hi");
}
