class Background {
    constructor() {
        this.image;
        this.x = 200;
        this.y = 200;
        this.width = 400;
        this.height = 400;
    }

    draw() {
        image(this.image, 0, 0, 400, 400);
    }
}