/*
This code is fairly basic. It begins to play a video and audio when the mouse is pressed initially.
Additionally, it creates a number of "Branches" when clicked that spring out from the mouse position to cover the screen in random directions.

While I wanted to do more with this project I ended up overshooting what I was intially going to be able to do,
but do plan to expand project in the future as I get more time.
*/
var walking;
var branches = [];

var music;

var font,
  fontSize = 50;

var bkgrdColor = 255;

function preload() {
  soundFormats('wav');
  music = createAudio('audio/trailhead.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);

  fill(bkgrdColor);
  textAlign(CENTER);
  textSize(fontSize);

  strokeWeight(2);

  walking = createVideo(['assets/Walking.mov', 'assets/Walking.webm']);
  walking.volume(0);
  walking.hide();
}

function draw() {
  background(bkgrdColor);
  windowResized()

  spreadingBranches();

  noStroke();
  text('This trail has begun construction', width/2, height/4);
  text('Come back later for the grand opening', width/2, height/1.25);

  image(walking, width/2, height/2, width/5, height/4);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  walking.loop();
  music.play();

  let randomColor = color(random(255), random(255), random(255));

  for (let i = 0; i < 10; i++) {
    createBranches(mouseX, mouseY, randomColor);
  }
}

function spreadingBranches() {
  for (let i = branches.length - 1; i >= 0; i--) {
    let b = branches[i];

    stroke(b.color);

    line(b.x1, b.y1, b.x2, b.y2);
  }
}

function createBranches(bX, bY, bColor) {

  let b = {
    x1: bX,
    y1: bY,
    x2: random(width, 0),
    y2: random(0, height),
    color: bColor
  }

branches.push(b);

}