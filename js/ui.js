class Ui {
    constructor() {
        this.textFont = 'VT323';
        this.textSize = 20;
        this.textFill = (0, 0, 0);
    }

    startScreen() {
        image(game.startScreenImage, 50, 100, 294, 210);
    }

    gameOver() {
        image(game.gameOverImage, 50, 100, 294, 210);
    }

    win() {
        image(game.winImage, 50, 100, 294, 210);
    } 
    
    button() {
        image(game.buttonImage, 150, 235, 92, 48);
    }
}