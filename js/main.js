const game = new Game();

function preload() {
	game.preload();
}

function setup() {
	createCanvas(400, 400);
	game.setup();  
}

function draw() {
	game.draw();
}
// Resizing canvas function
// function windowResized() { 
//     resizeCanvas(500, 500);
// }