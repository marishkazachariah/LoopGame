class Game {
  constructor() {
    this.background = new Background();
    // Declare countdown timer variables
    this.timer = new Timer();
    this.obstacles = new Obstacles();
    // this.player = new Player();
    // this.enemy = new Enemy();
  }

  preload() {
    this.background.image = loadImage("../assets/background/bg-room.png");
  }

  setup() {
    //background(255);
    // image
  }

  draw() {
    clear();
    this.background.draw();
    this.timer.draw();
    this.obstacles.draw();
  }
}
