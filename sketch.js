
var bg,together;
 var tom,tomImg1,tomImg2,tomImg3,tomImg4;
var jerry,jerryImg1,jerryImg2,jerryImg3,jerryImg4;


function preload() {
 bg=loadImage(garden.png)  
 jerry1=loadImage(mouse1.png)
 jerry2=loadImage(mouse2.png)
 jerry3=loadImage(mouse3.png)
 jerry4=loadImage(mouse4.png)
 tomImg1=loadImage(cat1.png)
 tomImg2=loadImage(cat2.png)
 tomImg3=loadImage(cat3.png)
 tomImg4=loadImage(cat4.png)
}
    

function setup(){
    createCanvas(1000,800);
       //create tom and jerry sprites here
   tom=createSprite(870,900);
   tom.addAnimation("tomsleeping",tomImg1)
   tom.scale=-0.2;
  
   jerry=createSprite(200,600)
   jerry.addAnimation("jerrystanding",jerryImg1);
   jerry.scale=0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if (tom.x-jerry.x>(tom.width-jerry.width)/2)
( 
    tom.velocityX=0
   
    tom.addAnimation("tomLastImage", tomImg3);
   tom.scale=0.15;
   tom.x=300;
   tom.changeAnimation ("TomlastImage");
   jerry.addAnimation("jerrylastImage",jerryImg3)
   jerry.scale=0.15;
   jerry.changeAnimation=("jerrylastImage");
   )
    drawSprites();
}


function keyPressed(){
if (keyCode===LEFT_ARROW)
{
    tom.velocityX=-5
    tom.addAnimation("tomRunning",tomImg2)
    tom.changeAnimation("tomRunning")
   
    jerry.addAnimation=("jerrytesing",jerryImg2)
    jerry.frameDelay=25
    jerry.changeAnimation=("jerryteasing")
}  //For moving and changing animation write code here


}
