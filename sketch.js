var boy,boyImg;
var road,roadImg,rockGroup;
var rock,rockImg;
var PLAY=1;
var END=0;
var gameState=1;
var score = 0;
function preload(){
boyImg = loadImage("boy.png")
roadImg = loadImage("ground2.png");
rockImg = loadImage("rock.png");
}

function setup() {
 createCanvas(600,200);

 road = createSprite(0,0,600,200);
road.addImage(roadImg);
road.scale =0.5;
 road.x = road.width/2;

 boy = createSprite(50,150,20,50);
 boy.addImage(boyImg);
 boy.scale = 0.05;
 

 rockGroup = createGroup();
}

function draw() {

    background(255);
  
    if(gameState === PLAY){
        road.velocityX = -4;
         score = score + Math.round(frameCount/60);
    
         if (road.x < 0){
            road.x = road.width/2;
         }
            if(keyDown("space")&& boy.y >=100) {
               boy.velocityY = -13;
            }
            boy.velocityY = boy.velocityY + 0.8
      
          spawnRocks();
          if(rockGroup.isTouching(boy)){
            gamestate = END;
     }
    
 

 drawSprites();
 fill(255);
}
function spawnRocks(){
var rock = createSprite(Math.round(random(100,width-100),100,10,10));
rockGroup.add(rock);
rock.velocityX = -6;
}
}