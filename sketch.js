const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var score = 0;
function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,800,600,20);

	for(var k = 0; k<=width; k=k+80){
		divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
	}

	for(var i = 40; i<=width; i=i+50){
		plinkos.push(new Plinko(i,75));
	}

	for(var j = 15; j<=width-10; j=j+50){
		plinkos.push(new Plinko(j,175));
	}
	
	for(var i = 40; i<=width; i=i+50){
		plinkos.push(new Plinko(i,275));
	}

	for(var i = 15; i<=width; i=i+50){
		plinkos.push(new Plinko(i,375));
	}

	// if(frameCount % 90===0){
	// 	particles.push(new Particle(random(width/2-30, width/2+30),10,10));
	// 	score++;
	// }

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();

  
  if(frameCount % 40===0){
     particles.push(new Particle(random(width/2-10, width/2+10),10,5));
  }

  for(var j = 0; j<particles.length; j++){
	  particles[j].display();

  }
  for(var k = 0; k< divisions.length; k++){
	  divisions[k].display();
  }

  for(var i = 0; i< plinkos.length; i++){
	  plinkos[i].display();
  }
  

  drawSprites();
 
}