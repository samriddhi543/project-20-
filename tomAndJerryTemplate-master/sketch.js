var cat,rat,garden;
var catImg,ratImg,bacgroundImg;
var catImg1,ratImg2,rat2,cat2;
function preload() {
    //load the images here
    bacgroundImg = loadImage("Images/garden.png");
    catImg = loadAnimation("Images/cat1.png");
    ratImg = loadAnimation("Images/mouse1.png");
    catImg1 = loadAnimation("Images/cat2.png","Images/cat3.png");
    ratImg2 = loadAnimation("Images/mouse2.png","Images/mouse3.png");
    cat2 =loadAnimation("Images/cat4.png");
    rat2 = loadAnimation("Images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400,1000,800);
    garden.addImage("garden",bacgroundImg);
    cat = createSprite(850,650,100,80);
    cat.addAnimation("cat",catImg);
    cat.scale = 0.15;
    rat = createSprite(300,630,100,80);
    rat.addAnimation("rat",ratImg);
    rat.scale = 0.15;
}

function draw() {

    background("255");
    //Write condition here to evalute if tom and jerry collid
    if(cat.x-rat.x<(cat.width-rat.width)/2){
       cat.addAnimation("catF",cat2);
       cat.changeAnimation("catF");
       rat.addAnimation("ratF",rat2);
       rat.changeAnimation("ratF");
       cat.velocityX = 0;
    }
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left_Arrow")){
    cat.addAnimation("catRunning",catImg1);
    cat.changeAnimation("catRunning")
       cat.velocityX = -2;
    rat.addAnimation("ratTeasing",ratImg2);
    rat.changeAnimation("ratTeasing")   
   } 

}
