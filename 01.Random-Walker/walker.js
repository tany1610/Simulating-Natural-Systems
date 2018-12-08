function Walker(x, y) {
  this.x = x;
  this.y = y;
  this.w = 3;
  this.walk = function () {
    let choice = floor(random(4));
    if (choice === 0) {
      this.x += 3;
    } else if (choice === 1) {
      this.x -= 3;
    } else if (choice === 2) {
      this.y += 3;
    } else if (choice === 3) {
      this.y -= 3;
    }
    if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
      this.walk();
    } else {
      return;
    }
  }
  this.show = function () {
    fill(255);
    ellipse(this.x, this.y, this.w, this.w);
  }
}