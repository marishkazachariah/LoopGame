class Ui {
  constructor() {
    this.x = 50;
    this.y = 100;
    this.width = 294;
    this.height = 210;
    this.textFont = "VT323";
    this.textSize = 50;
    this.textFill = [85, 149, 247];
    this.textX = 110;
    this.textY = 150;
  }

  gameOver() {
    image(game.gameOverImage, this.x, this.y, this.width, this.height);
    textSize(this.textSize);
    textFont(this.textFont);
    fill(this.textFill);
    text("Game Over", this.textX, this.textY);
    this.instructions("Press R to Restart");
  }

  win() {
    image(game.winImage, this.x, this.y, this.width, this.height);
    textSize(this.textSize);
    textFont(this.textFont);
    fill(this.textFill);
    text("You Win!", 120, this.textY);
    this.instructions("Press R to Replay Game");
  }

  instructions(instructions) {
    textSize(20);
    textFont(this.textFont);
    fill(this.textFill);
    text(instructions, 115, 230);
  }

  startScreen() {
    image(game.startScreenImage, this.x, this.y, this.width, this.height);
    textSize(20);
    textFont(this.textFont);
    fill(this.textFill);
    text("This Game is All About Loops", 90, 185);
    text("Press Enter to Start Game", 100, 205);
  }
}
