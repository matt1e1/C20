var movingRect, fixedRect;

function setup(){
  createCanvas(600,600);

  fixedRect=createSprite(200,200,40,60);
  movingRect=createSprite(100,50,20,80);


}

function draw(){
  background (20,1,50);

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(abs(movingRect.x-fixedRect.x)<= movingRect.width/2+fixedRect.width/2 
  && abs(movingRect.y-fixedRect.y)<= movingRect.height/2+fixedRect.height/2) {

    movingRect.shapeColor='green';
    fixedRect.shapeColor='green';
  }

  else{
    movingRect.shapeColor='yellow';
    fixedRect.shapeColor='purple';
  }

  drawSprites();
}