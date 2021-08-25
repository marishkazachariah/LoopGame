class Enemy {
    constructor() {
        this.x = 90;
        this.y = 30;
        this.width = 44;
        this.height = 83;
        this.speed = 1;
    }

    draw() {
        //let bounds = constrain(this.x, 10, 250);
        image(game.enemyImage, this.x, this.y, this.width, this.height);
        // constrain enemy within game bounds
        // constrain(this.x, 25, 350);
        // follow playable character
        let rotation = atan2(game.player.y - this.y, game.player.x - this.y);
        this.x += cos(rotation) * this.speed;
        this.y += sin(rotation) * this.speed;

        // stays within canvas bounds
        if(this.x >= 300 || this.x <= 10) {
            this.speed *= -1;
            this.x += cos(rotation) * this.speed;
            this.y += sin(rotation) * this.speed;
        }
        if(this.y >= 300 || this.y <= 0) {
            this.speed *= -1;
            this.x += cos(rotation) * this.speed;
            this.y += sin(rotation) * this.speed;
        }     
        // this.collision(game.player);
        // if (this.collision(game.player) || (this.x + this.width) < 0) {
        //     return false;
        // } else {
        //     return true;
        // }
    }
}