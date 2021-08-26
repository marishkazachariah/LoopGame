class Game {
  constructor() {
    this.background = new Background();
    this.timer = new Timer();
    this.player = new Player();
    this.enemy = new Enemy();
    this.interactable = new Interactable();
    this.ui = new Ui();
    this.isWindowTouched = false;
    this.isWindowClosed = false;
    this.isKnifeGrabbable = false;
    this.hasKnife = false;
  }

  preload() {
    this.backgroundImage = loadImage("assets/background/bg-room.png");
    this.playerImage = loadImage("assets/player/player.png");
    this.enemyImage = loadImage("assets/enemy/enemy.png");

    // load ui
    this.startScreenImage = loadImage("assets/ui/screen-start.png");
    this.gameOverImage = loadImage("assets/ui/screen-lose.png");
    this.winImage = loadImage("assets/ui/screen-win.png");
    this.buttonImage = loadImage("assets/ui/button-bg.png");

    // interactable(s)
    this.windowOpenImageLayer0 = loadImage(
      "assets/interactables/window-open.png"
    );
    this.windowOpenImageLayer1 = loadImage(
      "assets/interactables/window-open-frame.png"
    );
    this.windowClosedImage = loadImage(
      "assets/interactables/window-closed.png"
    );
    this.knife = loadImage("assets/interactables/knife.png");
    this.newKnife = loadImage("assets/interactables/knife.png");

    // load music
    this.music = loadSound("assets/music/day-15.mp3");
    this.gameOverSound = loadSound("assets/music/game-over-sound.wav");
    this.winSound = loadSound("assets/music/win-sound.wav");
    this.knockingSound = loadSound("assets/music/door-knock.wav");
    this.windowCloseSound = loadSound("assets/music/close-window.wav");
    this.windowOpenSound = loadSound("assets/music/open-window.wav");
  }

  setup() {
    this.isKnifeGrabbable = false;
    this.hasStarted = false;
    this.background.draw();
    this.ui.startScreen();
    this.music.play();
  }

  draw() {
    clear();
    this.background.draw();
    this.player.draw();

    // Window interactable to change the initial core loop
    this.windowCollision(this.player);
    if (this.isWindowClosed) {
      this.windowOpenImageLayer1.resize(0, 0);
      image(
        this.windowClosedImage,
        this.interactable.windowX,
        this.interactable.windowY,
        this.interactable.windowOpenWidth,
        this.interactable.windowOpenHeight
      );
      this.interactable.drawKnife();
    } else {
      this.windowClosedImage.resize(0, 0);
      this.windowOpen();
    }
    if (this.isKnifeGrabbable) {
      this.interactable.knifePlayerCollision(this.player);
    }
    this.timer.draw();
    this.timer.enemyAppear(this.enemy);
  }

  // made separate collision classes for interactables
  windowCollision(playerInfo) {
    let windowX = this.interactable.windowX + this.interactable.windowOpenWidth;
    let windowY =
      this.interactable.windowY + this.interactable.windowOpenHeight;
    // get the middle of the player
    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    if (dist(windowX, windowY, playerX, playerY) > 25) {
      this.isWindowTouched = false;
    } else {
      // here we have a collision
      this.isWindowTouched = true;
    }
  }

  windowOpen() {
    this.interactable.openWindowOutsideDisplay();
    setTimeout(this.interactable.openWindowFrameDisplay(), 2000);
    this.windowOpenImageLayer1.resize(
      this.interactable.windowOpenWidth,
      this.interactable.windowOpenHeight
    );
    this.windowOpenImageLayer0.resize(
      this.interactable.windowOpenWidth,
      this.interactable.windowOpenHeight
    );
  }

  gameOver() {
    this.ui.gameOver();
    this.gameOverSound.play();
    this.music.stop();
    noLoop();
  }

  winState() {
    this.ui.win();
    this.winSound.play();
    this.music.stop();
    noLoop();
  }
}
