var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
 
  bullet=createSprite(200, 200,50, 10);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  bullet.velocityX=10;

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
 
}

function draw() {
  background("black");  

  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10)
    {
      bullet.shapeColor=color(255,0,0)
    }

    

    if(damage<10)
    {
      bullet.shapeColor=color(0,255,0)
    }
  }

  drawSprites();
}

function hasCollided(bullet,wall)
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10)
  {
    bullet.shapeColor=color(255,0,0)
  }

  if(damage<10)
  {
    bullet.shapeColor=color(0,255,0)
  }


bulletRightEdge=bullet.x+bullet.width;
bulletLeftEdge=bullet.x;

if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}

