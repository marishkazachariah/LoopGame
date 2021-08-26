class Game {
  constructor() {
    this.background = new Background();
    // Declare countdown timer variables
    this.timer = new Timer();
    this.obstacles = new Obstacles();
    this.player = new Player();
    this.enemy = new Enemy();
    this.interactable = new Interactable();
    this.ui = new Ui();
  }

  preload() {
    this.backgroundImage = loadImage('assets/background/bg-room.png');
    this.playerImage = loadImage('assets/player/player.png');
    this.enemyImage = loadImage('assets/enemy/enemy.png');
    // load ui
    this.startScreenImage = loadImage('assets/ui/screen-start.png');
    this.gameOverImage = loadImage('assets/ui/screen-lose.png');
    this.winImage = loadImage('assets/ui/screen-win.png');
    this.buttonImage = loadImage('assets/ui/button-bg.png');
    // interactable(s)
    this.windowOpenImageLayer0 = loadImage('assets/interactables/window-open.png');
    this.windowOpenImageLayer1 = loadImage('assets/interactables/window-open-frame.png');
    this.windowClosedImage = loadImage('assets/interactables/window-closed.png');

    // load music
    this.music = loadSound('assets/music/day-15.mp3');
    this.gameOverSound = loadSound('assets/music/game-over-sound.wav');
    this.winSound = loadSound('assets/music/win-sound.wav');
  }

  setup() {
    // this.music.play();
  }
  
  draw() {
    clear();
    this.background.draw();
    this.obstacles.draw();
    this.timer.draw();
    this.player.draw();
    this.interactable.openWindowOutsideDisplay();
    this.interactable.openWindowFrameDisplay();
    this.timer.enemyAppear(this.enemy);
    setTimeout(this.interactable.openWindowFrameDisplay(), 2000);

    // player hits collider boxes
    
    // enemy and player collision
    this.collision(this.player);
  }

  // collide with player character to game over
  collision(playerInfo) {
    let enemyX = this.enemy.x + this.enemy.width / 2;
    let enemyY = this.enemy.y + this.enemy.height / 2;

    // get the middle of the player
    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    if (dist(enemyX, enemyY, playerX, playerY) > 25) {
        // console.log('meow');
    } else {
        // here we have a collision
        this.gameOver();
        this.music.stop();
    }
  }
  

  gameOver() {
    this.ui.gameOver();
    this.gameOverSound.play();
    noLoop();
  }

  winState() {
    this.ui.win();
    this.winSound.play();
    noLoop();
  }
}
