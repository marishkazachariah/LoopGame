const game = new Game();

function preload() {
    soundFormats('mp3', 'wav');
	game.preload();
}

function setup() {
	createCanvas(400, 400);  
    game.setup();
}

function draw() {
	game.draw();
}

function keyPressed() { 
    if(keyCode === 39 || keyCode === 68) {
        game.player.moveRight();
    }
    if(keyCode === 37 || keyCode === 65) {
        game.player.moveLeft();
    }
    if(keyCode === 40 || keyCode === 83) {
        game.player.moveDown();
    }
    if(keyCode === 38 || keyCode == 87) {
        game.player.moveUp();
    }
    if(keyCode === 82) {
        location.reload();
    }
}

// Resizing canvas function
// function windowResized() { 
//     resizeCanvas(500, 500);
// }