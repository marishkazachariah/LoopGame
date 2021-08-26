class Interactable {
    constructor() {
        this.windowX = 40;
        this.windowY = 20;
        this.windowOpenWidth = 72;
        this.windowOpenHeight = 94;
        this.windowClosedWidth = 74;
        this.windowClosedHeight = 90;
        this.knifeX = 100;
        this.knifeY = 100;
        this.knifeWidth = 15;
        this.knifeHeight = 40;
    }
    
    openWindowOutsideDisplay() {
        image(game.windowOpenImageLayer0, this.windowX, 15, this.windowOpenWidth, this.windowOpenHeight);
    }

    openWindowFrameDisplay() {
        image(game.windowOpenImageLayer1, this.windowX, this.windowY, this.windowOpenWidth, this.windowOpenHeight);
    }

    // have knife appear around dresser and press spacebar to grab knife
    drawKnife() {
        image(game.knife, this.knifeX, this.knifeY, this.knifeWidth, this.knifeHeight);
    }
}