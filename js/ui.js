class Ui {
    constructor() {
        this.x = 50;
        this.y = 100;
        this.width = 294;
        this.height = 210;       
        this.textFont = 'VT323';
        this.textSize = 50;
        this.textFill = [85, 149, 247]; 
        this.textX = 110;
        this.textY = 150;
    }

    startScreen() {
        image(game.startScreenImage, this.x, this.y, this.width, this.height);
        textSize(14);
        textFont('VT323'); // Referencing Google Font via font name
        text("Start Game", 100, 135);
    }

    gameOver() {
        image(game.gameOverImage, this.x, this.y, this.width, this.height);
        textSize(this.textSize);
        textFont(this.textFont); // Referencing Google Font via font name
        fill(this.textFill);
        text("Game Over", this.textX, this.textY);
    }

    win() {
        image(game.winImage, this.x, this.y, this.width, this.height);
    } 
    
    // change to keyboard instructions?
    startButton() {
        // image(game.buttonImage, 150, 235, 92, 48);
        // this.button = image(game.buttonImage, 150, 235, 92, 48);
        let button = createImg(game.buttonImage, "button");
        button.position(150, 235);
        button.mousePressed(this.restartGame);
    }
}