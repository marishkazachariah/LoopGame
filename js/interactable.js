class Interactable {
  constructor() {
    this.windowX = 40;
    this.windowY = 20;
    this.windowOpenWidth = 72;
    this.windowOpenHeight = 94;
    this.windowClosedWidth = 74;
    this.windowClosedHeight = 90;
    this.knifeX = 300;
    this.knifeY = 300;
    this.knifeWidth = 15;
    this.knifeHeight = 40;
  }

  openWindowOutsideDisplay() {
    image(
      game.windowOpenImageLayer0,
      this.windowX,
      15,
      this.windowOpenWidth,
      this.windowOpenHeight
    );
  }

  openWindowFrameDisplay() {
    image(
      game.windowOpenImageLayer1,
      this.windowX,
      this.windowY,
      this.windowOpenWidth,
      this.windowOpenHeight
    );
  }

  // have knife appear around dresser and press spacebar to grab knife
  drawKnife() {
    image(
      game.knife,
      this.knifeX,
      this.knifeY,
      this.knifeWidth,
      this.knifeHeight
    );
  }

  knifePlayerCollision(playerInfo) {
    let knifeX = this.knifeX + this.knifeWidth / 1.1;
    let knifeY = this.knifeY + this.knifeHeight / 1.1;

    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    if (dist(knifeX, this.knifeY, playerX, playerY) > 25) {
    } else {
      // parent knife to player
      game.knife.resize(0, 0);
      image(
        game.newKnife,
        this.knifeX,
        this.knifeY,
        this.knifeWidth,
        this.knifeHeight
      );
      this.knifeX = playerX;
      this.knifeY = playerY;
      game.hasKnife = true;
    }
  }
}
