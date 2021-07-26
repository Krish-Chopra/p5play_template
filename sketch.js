var ship, shipImg1;

var sea, seaImg;

function preload() {
  seaImg = loadImage("sea.png")
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}




function setup() {
  createCanvas(1000, 500);

  sea = createSprite(500,200,1000,250);
  sea.scale = 0.25
  
  sea.addImage(seaImg);
  sea.x = sea.width/2;
  


  ship = createSprite(50,160,20,50);
  ship.addAnimation("sailing", shipImg1);
  ship.scale = 0.5;
  ship.x = 10
  ship.y = 20
  ship.velocityX = 

 drawSprites();


}

function draw() {
 //making the sea velocity move
  sea.velocityX = -2
  ship.collide(sea);

  if(sea.x < 0) {
    sea.x = sea.width/2;
  }
  
  drawSprites();


}

