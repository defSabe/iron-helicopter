class Bullet {
  constructor(ctx, x, y) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.vx = 15
    this.vy = 0
    this.r = 2
    this.g = 0.1
  }

  draw() {
    this.ctx.beginPath();

    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    this.ctx.fillStyle = 'black'
    this.ctx.fill()
    this.ctx.closePath()
  }

  move() {
    // TODO: move circle
    this.vy += this.g;
    this.x += this.vx;
    this.y += this.vy;
  }

  isVisible() {
    // TODO: is inside canvas?
  }
}