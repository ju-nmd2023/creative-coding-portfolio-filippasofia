let cx, cy;
let angle = Math.PI; 
let angleStep = 0.02; 
let rMax = 400;
let r = 0;

function setup() {
  createCanvas(800, innerHeight);
  background(255); 
  strokeWeight(2);
  cx = width / 2;
  cy = height * 0.6; 
  colorMode(RGB, 255);
}

function draw() {
  let currentAngle = angle % TWO_PI; 
  let x = cx + cos(currentAngle) * r;
  let y = cy + sin(currentAngle) * r;

  let c = lerpColor(color(255, 100, 150), color(255, 180, 50), random(1));
  stroke(c);
  line(cx, cy, x, y);

  angle += angleStep;

  if (currentAngle + angleStep < TWO_PI) {
    r += 0.5; 
    if (r > rMax) {
      noLoop();
    }
  }
}





