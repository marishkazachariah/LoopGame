class Game {
  constructor() {
    this.background = new Background();
    // this.player = new Player();
    // this.enemy = new Enemy();
    // Declare countdown timer variables
    this.timer = new Timer();
  }

  setup() {
    //background(255);
    // image
  }

  preload() {
    // for images later
    // figure out how to load images
    // this.background.image = loadImage('../assets/background/photo2.jpg');
  }

  draw() {
    clear();
    background(255);    // gets updated per frame 
    this.timer.draw();
  }
}
