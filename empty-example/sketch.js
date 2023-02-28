let j;
function setup() {
  // put setup code here
  createCanvas(400,200);
  x = 100;
  y = 100;
  j = 0;
}

function draw() {
  // put drawing code here
  background(0,0,0)
  stroke(255,255,255)
  line(200,0,200,200)
  stroke(255,255,255)
  fill(255 ,255,255)
  
  //codingan makanan packman
  ellipse(350,90,20,20)
  ellipse(300,90,20,20)
  ellipse(250,90,20,20)
  fill(255,255,0)
  stroke(255,255,0)

  
  //codingan packman
  var X = 90 + 20*Math.sin(PI*j/20)
  j += 1
  arc(90 ,90,75,75,radians(30),radians(-30))
  fill(255,255,255)
  strokWeight(1)
  fill(255,255,255)
  
  
}