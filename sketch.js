//Create variables here
var dog
var happyDog
var database
var food
var foodStock
var dogImg
var foodS

function preload()
{
dogImg = loadImage("Dog.png")
	//load images here
happyDog = loadImage("happydog.png")
}

function setup() {
   database = firebase.database()
	createCanvas(800, 700);
  dog = createSprite(250,250,50,50);
  dog.addImage("dogImg",dogImg)
  dog.scale = 0.2
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}



  drawSprites();
fill("Red")
stroke("Orange")
text("Note: Press UP_ARROW key to feed Drago Milk!")
textSize(20)
}



function readStock(data){
foodS=data.val();
}

function writeStock(x){
if(x<=0){
  x=0;
}else{
  x=x-1;
}
  database.ref('/').set({
    Food:x  
  })
}