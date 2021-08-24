class Obstacles { 
  constructor() {
    this.roomColliders = []
    this.totalColliders = [];
    // walls
    // alarm clock table
    // dresser
    // bedside area
    this.bedsideX = 235;
    this.bedsideY = 100;
    this.bedsideWidth = 48;
    this.bedsideHeight = 118;
    // bookshelf
  }

  setup() {
    noStroke();
    fill(0, 0, 255, 60);
  }
  draw() {
    // collider for alarm clock
    fill(0, 0, 255, 60);
    noStroke();
    rect(40, 111, 44, 62);
    // collider for bed
    // rect(127, 89, 120, 145);
    // collider for beside area
    rect(this.bedsideX, this.bedsideY, this.bedsideWidth, this.bedsideHeight);
    // collider for dresser
    rect(286, 63, 74, 120);
    // collider for bookshelf
    rect(337, 250, 55, 130);
    // wall colliders 
    rect(360, 106, 20, 293);
    rect(20, 106, 20, 293);
    rect(20, 99, 218, 20);

  }

  collision(playerInfo, colX, colY, colWidth, colHeight) {
    if(playerInfo.x > colX - colWidth - 35 && playerInfo.x < colx + colWidth + 35 && playerInfo.y > coly - colHeight - 35 && playerInfo.y < colY + colHeight + 35) {
      return playerInfo.speed = playerInfo.speed * -1; 
    } else {
      return playerInfo.speed = 8;
    }
  }
  // collision(playerInfo, obstacleX, obsctacleY) {
  //   let collisionX =  + obstacleX / 2;
	// 	let collisionY = obsctacleY + this.height / 2;
	// 	// get the middle of the player
	// 	let playerX = playerInfo.x + playerInfo.width / 2;
	// 	let playerY = playerInfo.y + playerInfo.height / 2;
  // }
}
