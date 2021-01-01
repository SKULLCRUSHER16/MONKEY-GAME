
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,Survival_Time
var ground,invisibleground;
var   Survival_time=0;
var bananaGroup,obstacleGroup;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  
  obstaceImage = loadImage("obstacle.png");
 }



function setup() {
 createCanvas(610, 450);
  // Creating monkey
  monkey=createSprite(80,200,20,20);
monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
// Creating ground
  ground=createSprite(300,290,1500,20);
  ground.x=(ground.width/2);
  ground.velocityX=-3;
ground.shapeColor="brown";
  
  //invisible ground
  invisibleground=createSprite(300,290,600,20)
  invisibleground.visible=false;
  
}


function draw() {
background("cyan");
  
if(ground.x<0){
  ground.x=ground.width/2;
}
  //gravity code
monkey.velocityY = monkey.velocityY + 1.1
monkey.collide(invisibleground);

//monkey jumping
  if(keyDown("space") && monkey.y>=240){
    monkey.velocityY=-17;
  }

//Spawning bananas
  if(frameCount%80==0){
    bananagang();
    obstaclesgang();
  }  
  
//SURVIVAL TIME 
  Survival_time= Survival_time+Math.round((getFrameRate()/60));
  //Pritning survival time 
  fill("red");
  stroke("red");
  textSize(20);
  text("SURVUVAL TIME:  "+ Survival_time,215,80);
  drawSprites();
}
// Creating bananas
function bananagang(){
  banana=createSprite(600,120,10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-7;
  banana.lifetime=-1;
}

// Creating obstacles
function obstaclesgang(){
obstacles=createSprite(600,255,10,10);
obstacles.addImage(obstaceImage)
obstacles.scale=0.15;
obstacles.velocityX=-7;
obstacles.lifetime=-1;
}












