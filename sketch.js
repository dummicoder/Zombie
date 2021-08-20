var bg,bgImg;
var player, shooterImg, shooter_shooting;
var bull, bullImg;

var PLAY = 0;
var END = 1;
var GameState = PLAY;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  zomImg = loadImage("assets/zombie.png");
  bullImg = loadImage("assets/bull.png");

  bgImg = loadImage("assets/img.jpg")

}

function setup() {
  
  createCanvas(windowWidth,windowHeight);

//creating the player sprite
  player = createSprite(displayWidth/4-200, displayHeight/2+180, 50, 50);
  player.addImage(shooterImg)
  player.scale = 0.5
  player.debug = true
  player.setCollider("rectangle",0,0,300,300)

  

}

function draw() {
  background(bgImg); 

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("d")||touches.length>0){
  player.x = player.x+30
}
if(keyDown("a")||touches.length>0){
 player.x = player.x-30
}

//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("s")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("s")){
  player.addImage(shooterImg)
}

drawSprites();

  zombie();
  bullet();
  

}

function bullet(){
  if (keyCode === 32){
    var bull = createSprite(player.x + 80,player.y-40, 5,5);
    bull.shapeColor = "white";
    bull.addImage(bullImg);
    bull.scale = 0.03;
    bull.velocityX = 5;
  }
}

function zombie(){
  if(frameCount % 100 === 0){
    var zom = createSprite(displayWidth+50, displayHeight/2 + 205, 50, 50);
    zom.addImage(zomImg);
    zom.scale = 0.2;
    zom.velocityX = -20;
  }
  
}