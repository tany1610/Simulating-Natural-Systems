let walker;
let path = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  walker = new Walker(width / 2, height / 2);
}

function draw() {
  while (path.includes(`${walker.x}${walker.y}`)) {
    walker.walk();
  }
  path.push(`${walker.x}${walker.y}`)
  walker.show();
}