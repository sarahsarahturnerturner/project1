let crystal_moon;
let left_butterfly;
let right_butterfly;
let front_butterfly;
let left_waterbabe;
let right_waterbabe;
let opal;
let aquamarine;
let candles;
let amethyst;

let eclipseness = 0;
let timer = 0;




function preload(){
  crystal_moon = loadImage('crystal_moon.png');
  left_butterfly = loadImage('sidebutterfly.png');
  right_butterfly = loadImage('right_sidebutterfly.png');
  front_butterfly = loadImage('butterfly_front.png');
  left_waterbabe = loadImage('waterbearerLEFT.png');
  right_waterbabe = loadImage('waterbearerRIGHT.png');
  opal = loadImage('opal.png');
  aquamarine = loadImage('aquamarine.png');
  candles = loadImage('candles.png');
  amethyst = loadImage('amethyst.png');
}

function setup() {
  createCanvas(540, 960);

  moon = new Phase();
}

function draw() {



 // background(186, 56, 209);
var color1 = color(235, 52, 232);
var color2 = color(49, 204, 235);
setGradient(0, 0, width, height, color1, color2, "Y");
imageMode(CENTER);
image(crystal_moon, width/2, height/5);

image(opal, 480, 530);
image(opal, 50, 530);

push();
scale(.15);
image(amethyst, 1300, 350);
image(amethyst, 2300, 350);
pop();

push();
scale(.7);
image(left_waterbabe, 225, 900);
image(right_waterbabe, 525, 900);
pop();

image(left_butterfly, 120, 300);
image(right_butterfly, 420, 300);
image(left_butterfly, 50, 576);
image(right_butterfly, 490, 576);

image(left_butterfly, 50, 50);
image(right_butterfly, 500, 50);
image(front_butterfly, 270, 50);
image(front_butterfly, 420, 50);
image(front_butterfly, 120, 50);

// image(left_butterfly, 50, 150);

image(front_butterfly, 260, 430);
image(opal, 480, 370);
image(opal, 50, 370);
image(aquamarine, 480, 450);
image(aquamarine, 50, 450);

push();
scale(.4);
image(amethyst, 650, 2200);
image(amethyst, 300, 2200);
image(amethyst, 1000, 2200);
image(candles, 475, 2100);
image(candles, 825, 2100);
pop();

//frame rate below >>>
//text("frameRate " + int(getFrameRate()), 100, 100);


timer++;
if (timer%3== 0){

  if (eclipseness < 90){
    eclipseness++;
  } else {
    eclipseness = 0;
  }
}
  //fill(255, 255, 255);
//circle(width/2, height/5, 175);

  //moon.move();
  moon.display(eclipseness);
}


class Phase {
  constructor() {
    this.x = (0);
    this.y = height/5;
    this.diameter = 175;
    this.speed = 1;
    this.color = (186, 56, 209);
  }

  move() {
 this.x = this.x +this.speed;
 if(this.x > height){
  this.x = 0;
   
 }
  }

  display(eclipseness) {
    noStroke();
    print(this.x);

  this.x = map(eclipseness, 0, 90, 110, 450);
    fill(49, 204, 235);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") {  // Top to bottom gradient
    for (let i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 1.5, 0);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == "X") {  // Left to right gradient
    for (let j = x; j <= x+w; j++) {
      var inter2 = map(j, x, x+w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y+h);
    }
  }
}
