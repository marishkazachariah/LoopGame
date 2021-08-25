class Interactable {
    constructor() {
        this.x = 40;
        this.y = 20;
        this.windowOpenWidth = 72;
        this.windowOpenHeight = 94;
        this.windowClosedWidth = 74;
        this.windowClosedHeight = 90;
    }

    openWindowOutsideDisplay() {
        const windowOpen = image(game.windowOpenImageLayer0, this.x, 15, this.windowOpenWidth, this.windowOpenHeight);
    }

    openWindowFrameDisplay() {
        const windowClosed = image(game.windowOpenImageLayer1, this.x, this.y, this.windowOpenWidth, this.windowOpenHeight);
    }

    closeWindow() {
        image(game.windowClosedImage, this.x, this.y, this.windowOpenWidth, this.windowOpenHeight);
        windowOpen.fill(0, 0, 0, 0);
        windowClosed.fill(0, 0, 0, 0);
    }
}