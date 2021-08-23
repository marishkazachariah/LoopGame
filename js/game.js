class Game {
  constructor() {
    // this.background = new Background();
    // this.player = new Player();
    // this.enemy = new Enemy();
    // Declare countdown timer variables
    this.timer = new Timer();
  }

  preload() {
    // for images later
    // this.backgroundImages = [
    //     { src: loadImage("../assets/background/plx-1.png"), x: 0, speed: 0 },
    //   ];
  }

  draw() {
    // Timer function
    this.timer.draw();
  }
}
