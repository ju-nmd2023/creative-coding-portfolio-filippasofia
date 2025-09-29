// Flow field inspired generative artwork
// Inspired by Tyler Hobbs: https://www.tylerxhobbs.com/words/flow-fields
let lines = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(70);

  // starting points
  for (let i = 0; i < 300; i++) {
    lines.push(new FlowLine(random(width), random(height)));
  }
}

function draw() {
  for (let l of lines) {
    l.update();
    l.show();
  }
}

class FlowLine {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.hue = random(255); // each line gets a random color
  }

  update() {
    let angle = noise(this.pos.x * 0.002, this.pos.y * 0.002, frameCount * 0.002) * TWO_PI * 2;
    let step = p5.Vector.fromAngle(angle);
    step.setMag(1.5);
    this.pos.add(step);

    
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.y < 0) this.pos.y = height;
    if (this.pos.y > height) this.pos.y = 0;

    // the tone is changing a bit over time
    this.hue += 0.4;
    if (this.hue > 255) this.hue = 0;
  }

  show() {
    stroke(this.hue, 200, 255, 50); 
    strokeWeight(1);
    point(this.pos.x, this.pos.y);
  }
}

