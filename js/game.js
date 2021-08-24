class Game {
  constructor() {
    this.background = new Background();
    // Declare countdown timer variables
    this.timer = new Timer();
    this.obstacles = new Obstacles();
    this.colliders = [];
    // this.player = new Player();
    // this.enemy = new Enemy();
  }

  preload() {
    this.background.image = loadImage("../assets/background/bg-room.png");
  }

  setup() {
    for (let i = 0; i < 5; i++) {
      this.colliders.push(new Obstacles());
      console.log(this.colliders.length);
    }
  }

  draw() {
    clear();
    this.background.draw();
    this.timer.draw();
    this.obstacles.display();
  }
}
