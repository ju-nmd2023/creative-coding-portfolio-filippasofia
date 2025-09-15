// The following code is inspired by Bassima's lecture.
// I have made adjustments to create my own version of the animation.
let position;
let velocity;
let acceleration;

function setup() {
  createCanvas(innerWidth, innerHeight);
  position = createVector(150, 150);
  velocity = createVector(5, 8);
  background(255);
}

function draw() {
  noStroke();

  push();
  fill(255, 100, 200);
  ellipse(position.x, position.y, random(6));
  ellipse(width - position.x, height - position.y, random(6));
  pop();

  push();
  fill(50, 150, 255);;
  ellipse(position.x, height - position.y, random(6));
  ellipse(width - position.x, position.y, random(6));
  pop();

  if (position.x > width || position.x < 0) {
    velocity.x *= -1;
  }

  if (position.y > height || position.y < 0) {
    velocity.y *= -1;
  }

  const mouse = createVector(mouseX, mouseY);
  acceleration = p5.Vector.sub(mouse, position);
  acceleration.normalize();
  acceleration.mult(0.5);

  velocity.add(acceleration);
  velocity.limit(10);
  position.add(velocity);
}