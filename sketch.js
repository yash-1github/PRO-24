
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var paper;

function preload()
{
	paperimg = loadImage("paper.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;	

	

	wall1 = new Wall(600,600,200,20);
	wall2 = new Wall(500,560,20,100);
	wall3 = new Wall(700,560,20,100);
	ground = new Wall(400,620, width,10);
	ball = new Paper(100,570,20);
	 

  
}	


function draw() {

  background(0);
  Engine.update(engine);
  rectMode(CENTER);
 
  
  wall1.display();
  wall2.display();
  wall3.display();
  ball.display();
  ground.display();

  //paperSprite.x = ball.position.x ;
  //paperSprite.y = ball.position.y 


  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	 	
		Matter.Body.applyForce(ball.body,ball.body.position,{x:6.15,y:-6.15});
		
	}
}	

