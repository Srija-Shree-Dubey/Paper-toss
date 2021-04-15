
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper;	
var world;
var bgIMG


function preload()
{
	bgIMG = loadImage("bg.jpeg");
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,700,width,20);
	dustbinObj=new dustbin(1200,680,150,150);

	paper = new Paper(300,600,75);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgIMG);
 

  groundObject.display();

  paper.display();

  dustbinObj.display();

}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130, y:-145})
	}
}
