var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  rect3= createSprite(300,200,20,30)
  rect4=createSprite(300,400,30,20)
  rect4.velocityY=-1
}

function draw() {
  background("lightblue");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(collison(movingRect, fixedRect) ) {
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
else{
movingRect.shapeColor="green";
fixedRect.shapeColor="green";
}

if(collison(rect3, rect4)){
  rect3.width=rect3.width*2
  rect4.width=rect4.width*2

} else{
  rect3.width=20
  rect4.width=30
}
  drawSprites();
}

