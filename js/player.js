class Player {
  constructor() {
    this.image;
    this.x = 160;
    this.y = 120;
    this.width = 48;
    this.height = 79;
    this.speed = 8;
  }

  draw() {
    image(this.image, this.x, this.y, this.width, this.height);
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
