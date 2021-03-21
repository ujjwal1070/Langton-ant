// https://en.wikipedia.org/wiki/Langton%27s_ant

let canvaswidth = screen.width * 0.8;
let canvasheight = screen.height * 0.8;

let table;

function setup() {
  createCanvas(canvaswidth, canvasheight);

  let resetbutton = createButton("reset");
  resetbutton.position(screen.width * 0.7, canvasheight + 20);
  resetbutton.mousePressed(resetapp);
  resetapp();
}

function draw() {
  background(220);

  // speed
  for (let f = 0; f < 100; f++) {
    ant.update();
  }
  table.draw();
  ant.draw();
}

function resetapp() {
  table = new Table(2);
  // First one in the middle
  let posx = floor(table.columns / 2);
  let posy = floor(table.rows / 2);
  ant = new Ant(posx, posy);
}

function mouseDragged() {
  table.setBlock(mouseX, mouseY);
}
