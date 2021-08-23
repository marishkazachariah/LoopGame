class Game {
  constructor() {
    this.background = new Background();
    // this.player = new Player();
    // this.enemy = new Enemy();
    // Declare countdown timer variables
    this.timer = new Timer();
  }

  preload() {
    this.background.image = loadImage("../assets/background/bg-room.png");
    // figure out how to load images
    // this.background.image = loadImage('../assets/background/bg-room.png');
  }

  setup() {
    //background(255);
    // image
  }

  draw() {
    clear();
    this.background.draw();
    this.timer.draw();
  }
}
