let crystal_moon;

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

  //fill(255, 255, 255);
//circle(width/2, height/5, 175);

  moon.move();
  moon.display();
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

  display() {
    noStroke();
    fill(50, 89, 100);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

