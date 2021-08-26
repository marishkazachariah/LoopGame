class Obstacles { 
  constructor() {

    // bedside area
    this.bedsideX = 235;
    this.bedsideY = 100;
    this.bedsideWidth = 48;
    this.bedsideHeight = 118;
    // bookshelf
    this.bookshelfX = 337;
    this.bookshelfY = 250;
    this.bookshelfWidth = 55;
    this.bookshelfHeight = 130;
    // alarm clock table
    this.tableX = 40;
    this.tableY = 111;
    this.tableWidth = 44;
    this.tableHeight = 62;
    // dresser
    this.dresserX = 286;
    this.dresserY = 63;
    this.dresserWidth = 74;
    this.dresserHeight = 120;
    // wall left
    this.wallLX = 20;
    this.wallLY = 106;
    this.wallLWidth = 20;
    this.wallLHeight = 293;
    // wall right
    this.wallRX = 360;
    this.wallRY = 106;
    this.wallRWidth = 20;
    this.wallRHeight = 293;
    // wall top
    this.wallTX = 20;
    this.wallTY = 100;
    this.wallTWidth = 218;
    this.wallTHeight = 20;
  }

  draw() {
    
    fill(0, 0, 0, 60);
    noStroke();
    rect(this.bedsideX, this.bedsideY, this.bedsideWidth, this.bedsideHeight);
    rect(this.dresserX, this.dresserY, this.dresserWidth, this.dresserHeight);
    rect(this.bookshelfX, this.bookshelfY, this.bookshelfWidth, this.bookshelfHeight);
    rect(this.wallRX, this.wallRY, this.wallRWidth, this.wallRHeight);
    rect(this.wallLX, this.wallLY, this.wallLWidth, this.wallLHeight);
    rect(this.wallTX, this.wallTY, this.wallTWidth, this.wallTHeight);
    
    // issue: only one of the colliders work
    // the if statement below is the one that works best
    // if(game.player.x > this.bookshelfX - this.bookshelfWidth && game.player.x < this.bookshelfX + this.bookshelfWidth && game.player.y > this.bookshelfY - this.bookshelfHeight && game.player.y < this.bookshelfY + this.bookshelfHeight ) {
    //   game.player.speed = game.player.speed * -1; 
    // } else {
    //   game.player.speed = 8;
    // }
  
    // this.collision(game.player, this.bedsideX, this.bedsideY, this.bedsideWidth, this.bedsideY);
    // this.collision(game.player, this.dresserX, this.dresserY, this.dresserWidth, this.dresserHeight);
    // this.collision(game.player, this.bookshelfX, this.bookshelfY, this.bookshelfWidth, this.bookshelfHeight);
    // this.collision(game.player, this.wallRX, this.wallRY, this.wallRWidth, this.wallRHeight);
    // this.collision(game.player, this.wallLX, this.wallLY, this.wallLWidth, this.wallLHeight);
    // this.collision(game.player, this.wallTX, this.wallTY, this.wallTWidth, this.wallTHeight);
  }

  collision(playerInfo, colX, colY, colWidth, colHeight) {
    if(playerInfo.x > colX - colWidth - 20 && playerInfo.x < colX + colWidth + 20 && playerInfo.y > colY - colHeight - 20 && playerInfo.y < colY + colHeight + 20) {
      playerInfo.speed = playerInfo.speed * -1; 
    } else {
      playerInfo.speed = 8;
    }
  }
}
