
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5,rope6,rope7,rope8,rope9,rope10;
var world;


function setup() {
	createCanvas(1320, 650);
	
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(600,100,500,30)
	bob1 = new bob(400,575,100)
	bob2 = new bob(500,575,100)
	bob3 = new bob(600,575,100)
	bob4 = new bob(700,575,100)
	bob5 = new bob(800,575,100)

	
	rope1=new rope(bob1.body,roofObject.body,-200, 0)
	rope2=new rope(bob2.body,roofObject.body,-100, 0)
	rope5=new rope(bob3.body,roofObject.body,0, 0)
	rope6=new rope(bob4.body,roofObject.body,100, 0)
	rope7=new rope(bob5.body,roofObject.body,200, 0)

	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(1000,1000,1000);
  roofObject.display();

  rope1.display();
  rope2.display();
rope5.display();
rope6.display();	
rope7.display();	

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-300,y:145});
	  
	}
  }




