class Timer {
  constructor() {
    this.timer = 60 * 2;
  }

  draw() {
    textSize(14);
    textFont('VT323'); // Referencing Google Font via font name
    fill(0, 0, 0);
    let timer = this.timer, minutes, seconds;
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    // display time on screen
    text(minutes + ":" + seconds, 50, 135);
    // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    if (frameCount % 60 == 0 && this.timer > 0) { 
        this.timer --;
      }
    // Game over if timer is up
    if (this.timer <= 0) {
      game.gameOver();
    }
  }

  enemyAppear(enemy) {
    if(game.isWindowClosed) {
      if(this.timer <= 100) {
        enemy.draw();
        enemy.enemyCollision(game.player);
        game.knockingSound.stop();
        game.isWindowClosed = false;
        game.windowOpenSound.play();
        if (this.time <= 98) {
          game.windowOpenSound.stop();
        }
      }
    } else if(this.timer <= 110) {
      game.windowOpen();
      enemy.draw();
      enemy.enemyCollision(game.player);
    }
  }
}
