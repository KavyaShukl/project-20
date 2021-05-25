var bgImg,tom,tomFront,tomBack,tomlast,tom1,jerry,jerryImg1,jerryimg2,jerryImg3,jerryImg4;

function preload() {
     //load the images here
tomFront = loadAnimation("images/cat1.png");
tomBack =  loadAnimation("images/cat3.png","images/cat2.png");
tomlast = loadAnimation("images/cat4.png");
bgImg = loadImage("images/garden.png");
jerryImg1 = loadAnimation("images/mouse1.png");
jerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
jerryImg4 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(850,650);
    //create tom and jerry sprites here
    tom = createSprite(600, 510, 80, 50);
    tom.addAnimation("tom0",tomFront);

    tom.scale = 0.2;
    jerry = createSprite(100,500,50,60);
    jerry.addAnimation("j",jerryImg1);
    jerry.scale= 0.15;
  

  
}

function draw() {

    background(bgImg);

    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
      tom.velocityX = 0;
      tom.addAnimation("lastimg",tomlast);
      tom.changeAnimation("lastimg");
      tom.x = 223;

      jerry.addAnimation("jlast",jerryImg4);
      jerry.changeAnimation("jlast");
      
    }

    drawSprites();

    
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5
    tom.addAnimation("tomRunning", tomBack);
    tom.changeAnimation("tomRunning");
    
    jerry.addAnimation("jerryTeasing",jerryImg2);
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryTeasing");
  }
  
}