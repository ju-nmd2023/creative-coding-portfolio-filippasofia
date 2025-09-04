function setup() {
    createCanvas(800, 600);
    frameRate(10);
  }
  
  const size = 20;
  const divider = 20;
  const numRows = 60;
  const numCols = 80;
  
  let counter = 0;
  
  function draw() {
    background(255); 
    noStroke();
  
    for (let y = 0; y < numRows; y++) {
      for (let x = 0; x < numCols; x++) {
        const n = noise(x / divider, y / divider, counter);
  
        let col;
        let r = random();
        if (r < 0.33) col = color(222, 49, 99);       
        else if (r < 0.66) col = color(255, 182, 193); 
        else col = color(255, 201, 139);                     
        fill(col);
  
        let diameter = size * n * 1.5;
        ellipse(x * size + size/2, y * size + size/2, diameter);
      }
    }
  
    counter += 0.02;
  }
  