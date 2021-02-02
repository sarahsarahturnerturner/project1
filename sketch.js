let crystal_moon;
let eclipseness = 0;
let timer = 0;

function preload(){
  crystal_moon = loadImage('crystal_moon.png');
}

function setup() {
  createCanvas(540, 960);

  moon = new Phase();
}

function draw() {
  background(50, 89, 100);
imageMode(CENTER);
image(crystal_moon, width/2, height/5);
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
    this.color = (50, 89, 100);
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
    fill(50, 89, 100);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

