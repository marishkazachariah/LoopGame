class Timer {

  constructor() {
    this.timer = 60 * 3;
  }

  draw() {
    textAlign(CENTER, CENTER);
    textSize(100);
    textFont('VT323');  // Referencing Google Font via font name
    const timerText = text(this.timer, width / 2, height / 2);
    startTimer(this.timer, timerText);
    //     function startTimer(duration, display) {
    //       var timer = duration,
    //         minutes,
    //         seconds;
    //       setInterval(function () {
    //         minutes = parseInt(timer / 60, 10);
    //         seconds = parseInt(timer % 60, 10);

    //         minutes = minutes < 10 ? "0" + minutes : minutes;
    //         seconds = seconds < 10 ? "0" + seconds : seconds;

    //         display.textContent = minutes + ":" + seconds;

    //         if (--timer < 0) {
    //           timer = duration;
    //         }
    //       }, 1000);
    //     }
    //   }
  }
}
