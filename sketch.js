
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4;
var ceiling;
var Chain1, Chain2, Chain3, Chain4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ceiling = new Ground(400, 0, 800, 75);
	
	bob1 = new Bob(150, 100, 85);
	bob2 = new Bob(220, 100, 85);
	bob3 = new Bob(290, 100, 85);
	bob4 = new Bob(360, 100, 85);

	Chain1 = new Chain(bob1.body, {x: 150, y: 10});
	Chain2 = new Chain(bob2.body, {x: 220, y: 10});
	Chain3 = new Chain(bob3.body, {x: 290, y: 10});
	Chain4 = new Chain(bob4.body, {x: 360, y: 10});

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ceiling.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  
  Chain1.display();
  Chain2.display();
  Chain3.display();
  Chain4.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-95, y:0});
	}
}

