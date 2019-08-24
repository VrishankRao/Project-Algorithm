var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;

  movingRect=createSprite(200,200,70,40);
  movingRect.shapeColor="green";
  movingRect.debug=true;

}

function draw() {
  background(255,255,255);  
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;

if(isTouching(movingRect, fixedRect)){
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

  drawSprites();
}