var x,y,xspeed,yspeed ;
let input ,button ;
let xSlider,ySlider,xspeedSlider,yspeedSlider;
  let r = 25;
function setup() {
    createCanvas(710, 300);
  textSize(15);
  noStroke();
  x=100;
  y=200;
  xspeed=10;
  yspeed=5;

  xSlider = createSlider(0, 255, 100);
  xSlider.position(20, 165);
  ySlider = createSlider(0, 255, 100);
  ySlider.position(20, 195);

  button = createButton("app");
  button.position(100,120);
  button.mousePressed(app);
}

function app() {
  x = xSlider.value();
  y = ySlider.value();
  console.log("x =",x);
  console.log("y =",y);
  x += xspeed;
  y += yspeed;
  console.log("x =",x);
  console.log("y =",y);
}
function draw( ){
  background(51);
    ellipse(x, y, r*2, r*2);
  //text('x;', xSlider.x * 2 + xSlider.width, 35);
//  text('y;', ySlider.x * 2 + ySlider.width, 60);
//  text('x-speed', xspeedSlider.x * 2 + xspeedSlider.width, 60);
//  text('y-speed', yspeedSlider.x * 2 + yspeedSlider.width, 90);
x += xspeed;
y += yspeed;
if (x > width - r || x < r) {
xspeed = -xspeed;
}
if (y > height - r || y < r) {
yspeed = -yspeed;
}
  console.log("x =",x);
  console.log("y =",y);
  console.log("xseed =",xspeed);
  console.log("yseed =",yspeed);
}
