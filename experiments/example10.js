let lines = [];
let oscillator;
let isPlaying;

window.addEventListener("load", () => {
  oscillator = new Tone.Oscillator(440, "sine").toDestination();
});

function setup() {
  createCanvas(650, 650);
  background(255); 

  isPlaying = false;

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

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    if (isPlaying === true)
    {
      oscillator.stop();
      isPlaying = false;
    } else {
      oscillator.start();
      isPlaying = true;
    }
  }
});


class FlowLine {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.prev = this.pos.copy(); 
  }

  update() {
    this.prev.set(this.pos);

    let angle = noise(
      this.pos.x * 0.002,
      this.pos.y * 0.002,
      frameCount * 0.002
    ) * TWO_PI * 2;

    let step = p5.Vector.fromAngle(angle);
    step.setMag(0.3);
    this.pos.add(step);

    
    if (
      this.pos.x < 0 ||
      this.pos.x > width ||
      this.pos.y < 0 ||
      this.pos.y > height
    ) {
      this.pos = createVector(random(width), random(height));
      this.prev.set(this.pos);
    }
  }

  show() {
    stroke(0);        
    strokeWeight(1.5);  
    line(this.prev.x, this.prev.y, this.pos.x, this.pos.y);
  }
}
