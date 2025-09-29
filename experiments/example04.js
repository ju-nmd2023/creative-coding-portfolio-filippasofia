//This code is inspired by Garrit's noise-code 
function setup() {
  createCanvas(800, 600);
  frameRate(10);
}

const size = 10;
const divider = 20;
const numRows = 60;
const numCols = 80;

let counter = 0;

function draw() {
  background(30, 30, 30); 
  noStroke();

  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      const n = noise(x / divider, y / divider, counter);

    
      fill(n * 255, n * 50, 255 - n * 255);

      let w = size * n * 1.5;
      let h = size * (1 - n) * 1.5;

      rect(x * size, y * size, w, h);
    }
  }

  counter += 0.05;
}

