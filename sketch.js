
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var dustbin,binIMG;
var paper;
function preload()
{
	binIMG = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.
	dustbin=createSprite(964,520,20,20);
	dustbin.addImage(binIMG);
	dustbin.scale=0.45;

	dustbinPart1 = new Dustbin(902,505,10,120);
	dustbinPart2 = new Dustbin(962,565,130,10);
	dustbinPart3 = new Dustbin(1024,505,10,120);
  paper = new Paper();
	ground=new Ground();
    World.add(world,ground);
}


function draw() {
	background("black");
  rectMode(CENTER);
  background(0);
  
  dustbin.display();
  
  paper.display();
  
	dustbinPart1 .display();
	
	dustbinPart2 .display();
   
	dustbinPart3 .display();

	drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,x=12,y=-13);
	}
}



