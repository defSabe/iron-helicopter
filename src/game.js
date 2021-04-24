class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.tick = 0;

    this.bg = new Background(ctx);
    this.helicopter = new Helicopter(ctx);
    this.obstacles = [
      new Obstacle(this.ctx)];
  }

  start() {
    this.intervalId = setInterval(() => {
      this.clear();
      this.move();
      this.draw();
      this.checkCollisions();
      this.clearObstacles();
      this.tick++
      if (this.tick >= 100) {
        this.addObstacle();
        this.tick = 0;
      }
    }, 1000 / 60);

    
  }

  clearObstacles() {
    this.obstacles = this.obstacles.filter(o =>{
      return o.isVisible()
    })
    // TODO: filter only visible obstacles (call o.isVisible())

  }

  addObstacle() {
    const newObstacle = new Obstacle(this.ctx)
    this.obstacles.push(newObstacle)
    // TODO: add new Obstacle every 100 ticks
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw() {
    this.bg.draw();
    this.helicopter.draw();
    this.obstacles.forEach((o) => {
      o.draw();
    });

    // TODO: draw everything
  }

  move() {
    // TODO: move everything
    this.bg.move();
    this.helicopter.move();
    this.obstacles.forEach((o) => {
      o.move();
    });
  }

  checkCollisions() {
    const collisions = this.obstacles.some(obstacle => { 
      const colX = (
        this.helicopter.x + this.helicopter.w >= obstacle.x && 
        this.helicopter.x <= obstacle.x + obstacle.w
      )
      const colY = (
        this.helicopter.y + this.helicopter.h >= obstacle.y &&
        this.helicopter.y <= obstacle.y + obstacle.h
      )  

      return colX && colY 
    })

    if (collisions || this.helicopter.isFloor() ) {
     this.gameOver()
    }
    // TODO: check helicopter on floor?
    // TODO: iterate obstacles. check colX and colY
  }

  onKeyEvent(event) {
    this.helicopter.onKeyEvent(event);
    // TODO
  }

  gameOver() {
    clearInterval(this.intervalId);

    this.ctx.font = "40px Comic Sans MS";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "GAME OVER",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );
  }
}
