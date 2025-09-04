function setup() {
    createCanvas(1050, 1050);
    frameRate(3);
  
    // add pink, white or dark red colors to circles
    for (let y = 0; y < 10; y++) {
      colorGrid[y] = [];
      for (let x = 0; x < 10; x++) {
        colorGrid[y][x] = [];
        for (let i = 0; i < layers; i++) {
          let rand = Math.random();
          if (rand < 0.33) {
            colorGrid[y][x][i] = color(255, 255, 255); 
          } else if (rand < 0.66) {
            colorGrid[y][x][i] = color(205, 131, 168); 
          } else {
            colorGrid[y][x][i] = color(130, 29, 38); 
          }
        }
      }
    }
  }
  
  const size = 100;
  const layers = 10;
  
  // Array to keep my circles the same color throughout the loop
  let colorGrid = [];
  
  function drawLayers(x, y, size, layers, gridX, gridY) {
    const variance = size / 15;
    noFill();
  
    let thick = Math.random() > 0.75; 
    strokeWeight(thick ? 2.5 : 1);
  
    for (let i = 0; i < layers; i++) {
      if (Math.random() > 0.8) continue;
  
      stroke(colorGrid[gridY][gridX][i]); // använd färgen från arrayen
  
      const r = (size / layers) * i / 2;
  
      beginShape();
      let points = 10;
      for (let a = 0; a <= TWO_PI + 0.1; a += TWO_PI / points) {
        let rx = x + cos(a) * r + random(-variance, variance);
        let ry = y + sin(a) * r + random(-variance, variance);
        curveVertex(rx, ry);
      }
      endShape(CLOSE);
    }
  }
  
  function draw() {
    background(255,255,255, 1);
  
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        drawLayers(size / 2 + x * size, size / 2 + y * size, size, layers, x, y);
      }
    }
  }
  