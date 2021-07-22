var coin,dino,crown,oip,path;
var coinImg,dinoImg,crownImg,oipImg,pathImg;
var moneyCollection=0;
var coinG,dinoG,crownG,oipG;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
    coinImg=loadImage("sprites/coin.png");
    dinoImg=loadImage("sprites/dino.jpg");
    crownImg=loadImage("spritescrown.png");
    oipImg=loadImage("sprites/OIP.jps");
    pathImg=loadImage("sprites/path.jpg");
}


function setup(){
    createCanvas(400,400);
    path=createSprite(width/2,200);
    path.addImage(pathImg);
    path.velocityY=5;


oip = createSprite(50,300,20,20);
oip.addAnimation("marioRunning",OIPImg);
oip.scale=0.08;

coinG=newGroup;
dinoG=newGroup;
crownG=newGroup;
oipG=newGroup;
}

function draw(){
    if(gameState===PLAY){
        background(0);
        oip.x = World.mouseX;
    }
        
        edges= createEdgeSprites();
        oip.collide(edges);
        
        //code to reset the background
        if(path.y > height ){
          path.y = height/2;
}


createCoin();
createDino();
createCrown();
createoip();

if (coinG.isTouching(oip)) {
    coinG.destroyEach();
    moneyCollection=moneyCollection + 50;
  }
  else if (crownG.isTouching(OIP)) {
    crownG.destroyEach();
    moneyCollection=moneyCollection + 100;
  }
  else{
    if(dinoG.isTouching(OIP)) {
      gameState=END;

      oip.addAnimation("marioRunning",endImg);
      oip.x=width/2;
      oip.y=height/2;
      oip.scale=0.6;
      
      coinG.destroyEach();
      crownG.destroyEach();
      dinoG.destroyEach();
      
      coinG.setVelocityYEach(0);
      crownG.setVelocityYEach(0);
      dinoG.setVelocityYEach(0);
   
  }
}

drawSprites();
  textSize(20);
  fill(255);
  text("money: "+ moneyCollection,width-150,30);
  }

  function createCoin() {
    if (World.frameCount % 200 == 0) {
    var coin= createSprite(Math.round(random(50, width-50),40,20, 10));
    coin.addImage(coinImg);
    coin.scale=0.12;
    coin.velocityY = 5;
    coin.lifetime = 200;
    coinG.add(coin);
    }
  }
  
  function createCrown() {
    if (World.frameCount % 320 == 0) {
    var crown = createSprite(Math.round(random(50, width-50),40, 10, 10));
    crown.addImage(crownImg);
    crown.scale=0.03;
    crown.velocityY = 5;
    crown.lifetime = 200;
    crownG.add(crown);
  }
  }
  
  function createDino(){
    if (World.frameCount % 530 == 0) {
    var dino = createSprite(Math.round(random(50, width-50),40, 10, 10));
    dino.addImage(dinoImg);
    dino.scale=0.1;
    dino.velocityY = 4;
    dino.lifetime = 200;
    dinoG.add(dino);
    }
  }
  



































