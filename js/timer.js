class Timer {
  constructor() {
    this.timer = 60 * 2;
  }

  draw() {
    // textAlign(CENTER, CENTER); // use for game over screen
    textSize(14);
    textFont("VT323"); // Referencing Google Font via font name
  
    let timer = this.timer, minutes, seconds;
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    // display time on screen
    text(minutes + ":" + seconds, 50, 135);
    // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    if (frameCount % 60 == 0 && this.timer > 0) { 
        this.timer --;
      }
    if (this.timer <= 0) {
      console.log('Game over');
    }
  }
}
