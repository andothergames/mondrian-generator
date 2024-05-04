function setup() {
  createCanvas(400, 400);
}

function draw() {
  // console.log(mouseX, mouseY);
  const lineSpaces = [18, 28, 42, 62, 82, 120];
  let y = 0;
  
  background(255, 255, 255);
  noFill();
  stroke(230, 200, 60);
  strokeCap(SQUARE);
  strokeWeight(8);
  randomColLine();
  randomRowLine();
  
  function randomColLine() {
    line(12, 0, 12, 400);
  };
  
  function randomRowLine() {
    line(0, 12, 400, 12);
  }
//   line(12, 0, 12, 140);
//   strokeWeight(12);
//   line(56, 30, 100, 30);
//   strokeWeight(8);
//   line(26, 0, 26, 400);
//   line(54, 0, 54, 400);
//   line(96, 0, 96, 400);
//   line(200, 0, 200, 400);
//   line(218, 0, 218, 400);
//   line(340, 0, 340, 400);
//   line(358, 0, 358, 140);
//   line(372, 0, 372, 180);
//   line(390, 0, 390, 400);
//   line(0, 12, 400, 12);
//   line(0, 70, 400, 70);
//   line(0, 180, 400, 180);
  
//   stroke(255, 0, 0);
//   line(26, 0, 26, 8);
//   line(96, 0, 96, 8);
//   line(200, 0, 200, 8);
//   line(358, 0, 358, 8);
//   line(390, 0, 390, 8);
  
//   stroke(0, 0, 255);
//   line(12, 8, 12, 16);
//   line(68, 8, 68, 16);
//   line(340, 8, 340, 16);
//   line(372, 8, 372, 16);
  
//   stroke(220, 220, 220);
//   line(86, 8, 86, 16);
//   line(120, 8, 120, 16);
//   line(192, 8, 192, 16);
//   line(210, 8, 210, 16);
//   line(230, 8, 230, 16);
//   strokeWeight(18);
//   line(300, 8, 300, 16);
//   strokeWeight(8);
//   line(330, 8, 330, 16);
//   line(358, 8, 358, 16);
  
//   noStroke();
//   fill(255, 0, 0)
//   rect(66, 16, 20, 50);
//   fill(220, 220, 220)
//   rect(66, 40, 20, 10);
  

  
  
}