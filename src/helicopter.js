class Helicopter {
  constructor(ctx) {
    this.ctx = ctx;
    this.tick = 0;

    this.x = 100;
    this.y = 0;

    this.w = 100;
    this.h = 40;

    this.vx = 0;
    this.vy = 0;
    this.ay = 0;
    this.ax = 0;
    this.g = 0.1;

    this.img = new Image();
    this.img.src =
      "https://2.bp.blogspot.com/-P6ZbLE-rnFM/WPTQh65UtMI/AAAAAAAABF8/9iYl-cIUEtIhj2JDTixyqZNeBn183AdmQCLcB/s1600/helicopter-spritesheet.png";
    this.img.frames = 4;
    this.img.frameIndex = 0;

    this.weapon = new Weapon(this);
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      0,
      (this.img.frameIndex * this.img.height) / this.img.frames,
      this.img.width,
      this.img.height / this.img.frames,
      this.x,
      this.y,
      this.w,
      this.h
    );
    this.tick++;
    if (this.tick >= 10) {
      this.animate();
      this.tick = 0;
    }
    // TODO: draw helicopter image

    this.weapon.draw();
  }

  isFloor() {
    // TODO: check if floor
  }

  move() {
    this.vy += this.g;
    this.vy += this.ay;
    this.vx += this.ax;
    this.x += this.vx;
    this.y += this.vy;
    // TODO: move
  }

  onKeyEvent(event) {
    if (event.type === "keydown") {
      switch (event.keyCode) {
        case UP:
          console.log("hola");
          this.ay = -0.2;
          break;
      }
    } else {
      switch (event.keyCode) {
        case UP:
          this.ay = 0;
          break;
      }
    }
  }

  animate() {
    if (this.ay < 0) {
      this.img.frameIndex++;

      if (this.img.frameIndex >= this.img.frames) {
        this.img.frameIndex = 0;
      }
    }
  }
}
