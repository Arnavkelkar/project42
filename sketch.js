var hangle,mangle,sangle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  var h = hour();
  var m = minute();
  var s = second();
  translate(200,200);
  rotate(-90);

  background(255,255,255);  
  drawSprites();

  hangle = map(h % 12,0,12,0,360);
  mangle = map(m,0,60,0,360);
  sangle = map(s,0,60,0,360);

  push();
  stroke(255,0,0);
  strokeWeight(7);
  rotate(hangle);
  line(0,0,100,0);
  pop();

  push();
  stroke(255,250,0);
  strokeWeight(7);
  rotate(mangle);
  line(0,0,100,0);
  pop();

  push();
  stroke(0,250,250);
  strokeWeight(7);
  rotate(sangle);
  line(0,0,100,0);
  pop();

  push();
  strokeWeight(5);
  noFill();
  stroke(255,0,0);
  arc(0,0,250,250,0,hangle);
  pop();
  
  push();
  strokeWeight(5);
  noFill();
  stroke(255,250,0);
  arc(0,0,250,250,0,mangle);
  pop();

  push();
  strokeWeight(5);
  noFill();
  stroke(0,250,250);
  arc(0,0,250,250,0,sangle);
  pop();
}