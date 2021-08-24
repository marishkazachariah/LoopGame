class Game {
  constructor() {
    this.background = new Background();
    // Declare countdown timer variables
    this.timer = new Timer();
    this.obstacles = new Obstacles();
    this.player = new Player();
    // this.enemy = new Enemy();
  }

  preload() {
    this.backgroundImage = loadImage('../assets/background/bg-room.png');
    this.playerImage = loadImage('../assets/player/player.png');
    // load ui
    this.startScreenImage = loadImage('../assets/ui/screen-start.png');
    this.gameOverImage = loadImage('../assets/ui/screen-lose.png');
    this.winImage = loadImage('../assets/ui/screen-win.png');
    this.buttonImage = loadImage('../assets/ui/button-bg.png');
  }

  draw() {
    clear();
    this.background.draw();
    this.obstacles.draw();
    this.player.draw();
    this.timer.draw();

    // player hits boundary at bottom of the screen
    if(this.player.y > 323) {
      this.player.y = this.player.y - this.player.speed;
    }

    // player hits collider boxes
    //this.obstacles.collision(this.player, this.obstacles.bedsideX, this.obstacles.bedsideY, this.obstacles.bedsideWidth, this.obstacles.bedsideHeight);
    // if (obstacle.collision(this.player) || (obstacle.x + obstacle.width) < 0) {
    //   return false
    // } else {
    //   return true
    // }
  }
}
