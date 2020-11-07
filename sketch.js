var movingRect , FixedRect



function setup() {
  createCanvas(1200,800);
 FixedRect = createSprite(600, 400, 50, 80);
 movingRect = createSprite(400, 200, 80, 30);

FixedRect.debug=true;
movingRect.debug=true;

 movingRect.shapeColor="green";
 FixedRect.shapeColor="green";
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  if(FixedRect.x-movingRect.x < FixedRect.width/2 + movingRect.width/2
    && movingRect.x-FixedRect.x < FixedRect.width/2 + movingRect.width/2
    && FixedRect.y-movingRect.y < FixedRect.height/2 + movingRect.height/2
    && movingRect.y-FixedRect.y < FixedRect.height/2 + movingRect.height/2){

    movingRect.shapeColor="red";
    FixedRect.shapeColor="red";
  }
  else {
    movingRect.shapeColor="green";
    FixedRect.shapeColor="green"; 
  }
  drawSprites();
}