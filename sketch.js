
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var dustbin1,dusbin2,dustbin3
var ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100,200,200,PI/2)
	dustbin1 = new Dustbin(465,560,20,180)
	dustbin2 = new Dustbin(550,640,150,20)
	dustbin3 = new Dustbin(635,560,20,180)
	ground = Bodies.rectangle(400,650,800,10,{isStatic:true})
	World.add(world,ground)

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  rectMode(CENTER)
  rect(width/2,650,width,10)
  push()
  fill("pink")
  paper1.display()
  pop()
dustbin1.display()
dustbin2.display()
dustbin3.display()

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}












