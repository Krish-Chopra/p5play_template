var ship, shipImg1;

var sea, seaImg;

function preload() {
  seaImg = loadImage("sea.png")
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}




function setup() {
  createCanvas(1000, 500);
  background("blue")
  sea = createSprite(500,200,1000,250);
  sea.scale = 0.25;
  sea.addImage(seaImg);
  sea.velocityX = -5
  ship = createSprite(120,160,20,50);
  ship.addAnimation("sailing",shipImg1);
  ship.scale = 0.25;
}

function draw() {
 //making the sea velocity move
 background(0);
  sea.velocityX = -3
  if(sea.x < 0) {
    sea.x = sea.width/8;
  }
  
  drawSprites();


}

