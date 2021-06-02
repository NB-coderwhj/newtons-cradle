
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var string1, string2, string3, string4, string5;

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(200,400);
	bob2 = new Bob(300,400);
	bob3 = new Bob(400,400);
	bob4 = new Bob(500,400);
	bob5 = new Bob(600,400);
	
	roof = new Roof();
	string1 = new String(bob1.body,{x:200,y:50});
	string2 = new String(bob2.body,{x:300,y:50});
	string3 = new String(bob3.body,{x:400,y:50});
	string4 = new String(bob4.body,{x:500,y:50});
	string5 = new String(bob5.body,{x:600,y:50});

	Engine.run(engine);
  
}


function draw() {
  background(0);
  
	keyPressed();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,{x:bob1.body.position.x,y:bob1.body.position.y},{x:0,y:0});
		console.log("implementing")
	}
}



