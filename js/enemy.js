class Enemy {
    constructor() {
        this.x = 90;
        this.y = 30;
        this.width = 44;
        this.height = 83;
        this.speed = 1;
        // this.rotation = atan2(game.player.y - this.y, game.player.x - this.y);
    }

    draw() {
        image(game.enemyImage, this.x, this.y, this.width, this.height);
        // follow playable character
        let rotation = atan2(game.player.y - this.y, game.player.x - this.y);
        this.x += cos(rotation) * this.speed;
        this.y += sin(rotation) * this.speed;
        // collide with player character to game over
    }
}