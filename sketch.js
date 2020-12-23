var movingRect 
var fixedRect
var rect1
var rect2
var rect3
var rect4


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 100);
  fixedRect.shapeColor="blue"
  movingRect=createSprite(400, 300, 100, 50);
  movingRect.shapeColor="blue"
  movingRect.debug = true 
  fixedRect.debug = true
  rect1=createSprite(100, 200, 50, 50);
  rect2=createSprite(200, 100, 50, 50);
  rect3=createSprite(300, 100, 50, 50);
  rect4=createSprite(400, 100, 50, 50);
  rect1.shapeColor="red"
  rect2.shapeColor="red"
  rect3.shapeColor="red"
  rect4.shapeColor="red"
}

function draw() {
  background(0,0,0);  
  movingRect.x=mouseX
  movingRect.y=mouseY
 
  if (isTouching(movingRect,rect4)) {
    rect4.shapeColor="pink"
    movingRect.shapeColor="pink"
  } 
  else {
   rect4.shapeColor="red"
    movingRect.shapeColor="blue"
  }

  drawSprites();
}

