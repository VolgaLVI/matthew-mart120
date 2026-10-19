function setup() {
	createCanvas(400,400);
}

function draw() {
	background(220);
  
	fill(0);
	noStroke();
	textSize(12);
	text("x: " + round(mouseX) + ", y: " + round(mouseY), 10, 20);
	
	fill(230, 210, 163);
	rect(210, 245, 30, 30);
	
	fill(125, 105, 60);
	circle(225, 144, 210);
	
	fill(230, 210, 163);
	circle(222, 150, 200);
	
	fill(24, 25, 26);
	rect(152, 260, 145, 230);
	
	
	fill(255, 255, 255);
	circle(180, 160, 35);
	
	fill(36, 44, 48);
	circle(175, 160, 12);
	
	
	
	console.log("hi");
}
