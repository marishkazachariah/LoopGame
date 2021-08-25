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
        textSize(this.textSize);
        textFont(this.textFont); 
        fill(this.textFill);
        text("Start Game", 100, 135);
    }

    gameOver() {
        image(game.gameOverImage, this.x, this.y, this.width, this.height);
        textSize(this.textSize);
        textFont(this.textFont); 
        fill(this.textFill);
        text("Game Over", this.textX, this.textY);
        this.instructions('Press R to Restart');
    }

    win() {
        image(game.winImage, this.x, this.y, this.width, this.height);
        textSize(this.textSize);
        textFont(this.textFont); 
        fill(this.textFill);
        text("You Win!", this.textX, this.textY);
        this.instructions('Press R to Replay Game');
    } 
    
    // change to keyboard instructions?
    startButton() {
        // image(game.buttonImage, 150, 235, 92, 48);
        // this.button = image(game.buttonImage, 150, 235, 92, 48);
        let button = createImg(game.buttonImage, "button");
        button.position(150, 235);
        button.mousePressed(this.restartGame);
        this.instructions('Press Enter to Start Game');
    }

    instructions(instructions) {;
        textSize(20);
        textFont(this.textFont); 
        fill(this.textFill);
        text(instructions, 125, 230);
    }
}