let crystal_moon;
let left_butterfly;
let right_butterfly;
let front_butterfly;
let left_waterbabe;
let right_waterbabe;
let opal;
let aquamarine;

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


push();
scale(.7);
image(left_waterbabe, 225, 900);
image(right_waterbabe, 525, 900);
pop();

image(left_butterfly, 108, 576);
image(right_butterfly, 432, 576);
image(front_butterfly, 200, 576);
image(opal, 400, 576);
image(aquamarine, 200, 576);
//text(100,100,getFrameRate());
text("frameRate " + int(getFrameRate()), 100, 100);


timer++;
if (timer%2== 0){

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
