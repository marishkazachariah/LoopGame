class Player {
  constructor() {
    this.x = 160;
    this.y = 120;
    this.width = 48;
    this.height = 79;
    this.speed = 8;
  }

  draw() {
    image(game.playerImage, this.x, this.y, this.width, this.height);
    // player hits boundary at bottom of the screen
    if(this.y > 323) {
      this.y = this.y - this.speed;
    }
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveUp() {
    this.y -= this.speed;
  }

  moveDown() {
    this.y += this.speed;
  }
}

