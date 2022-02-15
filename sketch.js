const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var tower,towerImage;

var cannon;

var backImage;

var ammo = [];

var boats;

function preload() {
  backImage = loadImage("background.gif");
  towerImage = loadImage("tower.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  angle = -PI/4;

  tower = new Tower(120,350,180,310);
  cannon = new Cannon(160,120,150,75,angle);
  boats = new Boat(width/2,height-100,200,200,-100);

  rectMode(CENTER);
}

function draw() {
  background("black");

  image(backImage,0,0,width,height);

  Engine.update(engine);

  for(var i = 0; i<ammo.length; i++){
    showCannonBalls(ammo[i],i);
  }

  tower.display();
  cannon.display();
  boats.display();
}

function showCannonBalls(ball,index){
  ball.display();
}

function keyReleased(){
  if(keyCode==ENTER){
    ammo[ammo.length-1].shoot();
  }
}

function keyPressed(){
  if(keyCode==ENTER){
    var cball = new CBall(cannon.x+25,cannon.y-50,80);
    ammo.push(cball);
  }
}