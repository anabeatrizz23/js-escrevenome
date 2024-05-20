function setup() {
    createCanvas(600, 600);
    background("#D5BBD9");
  }
  
  function draw() {
    stroke("blue");
    fill("pink");
    
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  