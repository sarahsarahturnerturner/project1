let t, theta, radius=200;
let frames=480;

function setup(){
createCanvas (500, 500);
noStroke();

}

function draw(){
t = (frameCount%frames)/frames;
background(0);
translate(width/2, height/2);
rotate(PI/2);
if (t<0.5)[
	let tt=map(t,0,0.5,0,1);
if (tt<.5){
	fill(100);
	let r = map(tt, 0, 0.5, radius, 0);
	arc(0, 0, radius, r, 0, PI);
	acr(0, 0, radius, radius, PI, TWO_PI);
}else{
	fill(255);
	arc(0, 0, radius, radius, PI, TWO_PI);
	let r = map(tt, 0.5, 1.0, 0, radius);
	fill(0);
	arc(0, 0, radius, radius, 0, PI);
}else{
	let tt=map(t,0.5,1,0,1);
	if (tt<.5);
	fill(0);
	arc(0, 0, radius, radius, PI, TWO_PI);
	let r = map(tt, 0, 0.5, radius,0);
	fill(255);
	arc(0, 0, radius, r 0, PI);
	fill(0);
	let r = map(tt, 0.5, 1.0, 0. radius);
	arc(0, 0, radius, radius, 0, PI);
	arc(0, 0, radius, r PI, TWO_PI);
}
	}

theta+TWO_PI/frames;



