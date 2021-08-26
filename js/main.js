const game = new Game();

function preload() {
  soundFormats("mp3", "wav");
  game.preload();
}

function setup() {
  createCanvas(400, 400);
  game.setup();
}

function draw() {
    if(game.hasStarted) {
        game.draw()
    }
}

function keyPressed() {
  if (keyCode === 39 || keyCode === 68) {
    game.player.moveRight();
  }
  if (keyCode === 37 || keyCode === 65) {
    game.player.moveLeft();
  }
  if (keyCode === 40 || keyCode === 83) {
    game.player.moveDown();
  }
  if (keyCode === 38 || keyCode == 87) {
    game.player.moveUp();
  }
  if (keyCode === 82) {
    location.reload();
  }
  if (keyCode === 13) {
    game.hasStarted = true;
    game.startMusic();
  }
  if (keyCode === 27 || keyCode === 81) {
    alert("You can't just simply 'escape' :~)");
  }
  if (keyCode === 32 && game.isWindowTouched) {
    game.isWindowClosed = true;
    game.windowCloseSound.play();
    game.knockingSound.play();
    game.knockingSound.loop();
    game.isKnifeGrabbable = true;
    // initially wanted to delay the knocking, but via setTimeout I get this warning/error:
    // p5.sound.js:1696 SoundFile.play() called after dispose
    // setTimeout(game.knockingSound.play, 2000);
  }
}
