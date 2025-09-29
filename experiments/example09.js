// The following code is inspired by Bassima's lecture.
// I have made adjustments to create my own version of the animation.
let position;
let velocity;
let acceleration;

function setup() {
  createCanvas(innerWidth, innerHeight);
  position = createVector(width / 2, height / 2);
  velocity = createVector(5, 8);
  background(173, 216, 230); 
  strokeWeight(0);
}

function draw() {
  
  fill(173, 216, 230, 20);
  rect(0, 0, width, height);

  noStroke();

 
  if (random() < 0.5) {
    fill(255, 165, 0); 
  } else {
    fill(255, 140, 0); 
  }
  ellipse(position.x, position.y, random(4, 10));

  
  const mouse = createVector(mouseX, mouseY);
  acceleration = p5.Vector.sub(mouse, position);
  acceleration.setMag(0.5); 

  velocity.add(acceleration);
  velocity.limit(10);
  position.add(velocity);

  
  if (position.x > width || position.x < 0) velocity.x *= -1;
  if (position.y > height || position.y < 0) velocity.y *= -1;
}