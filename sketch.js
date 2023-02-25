var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var random

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  tower = createSprite(windowWidth/2,windowHeight);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(windowWidth/2, windowHeight/2)
  ghost.addImage(ghostImg)
  ghost.scale=0.4

  
  

  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
      tower.velocityY

    }

    drawSprites()

    door()
  } 

function door() {

  if(frameCount % 60 === 0)
  var door = createSprite(random,-100)
 
  door.velocityY = -2

  
    }





