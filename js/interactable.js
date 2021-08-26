class Interactable {
    constructor() {
        this.windowX = 40;
        this.windowY = 20;
        this.windowOpenWidth = 72;
        this.windowOpenHeight = 94;
        this.windowClosedWidth = 74;
        this.windowClosedHeight = 90;
        this.transparent = [255, 0];
        this.opaque = [255, 255];
    }
    
    openWindowOutsideDisplay() {
        image(game.windowOpenImageLayer0, this.windowX, 15, this.windowOpenWidth, this.windowOpenHeight);
    }

    openWindowFrameDisplay() {
        image(game.windowOpenImageLayer1, this.windowX, this.windowY, this.windowOpenWidth, this.windowOpenHeight);
    }
}