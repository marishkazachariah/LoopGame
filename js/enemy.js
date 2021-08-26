class Enemy {
  constructor() {
    this.x = 90;
    this.y = 30;
    this.width = 44;
    this.height = 83;
    this.speed = 1;
  }

  draw() {
    image(game.enemyImage, this.x, this.y, this.width, this.height);

    // follow playable character
    let rotation = atan2(game.player.y - this.y, game.player.x - this.y);
    this.x += cos(rotation) * this.speed;
    this.y += sin(rotation) * this.speed;

    // stays within canvas bounds
    if (this.x >= 300 || this.x <= 10) {
      this.speed *= -1;
      this.x += cos(rotation) * this.speed;
      this.y += sin(rotation) * this.speed;
    }
    if (this.y >= 300 || this.y <= 0) {
      this.speed *= -1;
      this.x += cos(rotation) * this.speed;
      this.y += sin(rotation) * this.speed;
    }
  }

  // collide with player character to game over
  enemyCollision(playerInfo) {
    let enemyX = this.x + this.width / 1.1;
    let enemyY = this.y + this.height / 1.1;

    // get the middle of the player
    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    if (dist(enemyX, enemyY, playerX, playerY) > 25) {
    } else {
      if (!game.hasKnife) {
        game.gameOver();
        console.log("lose");
      } else {
        game.winState();
        console.log("win");
      }
    }
  }
}
