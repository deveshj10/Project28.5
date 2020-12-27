const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,stone,ground,boy,boyImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var slingShot;

function preload()
{
	boyImg = loadImage("images/boy.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy = createSprite(150,680,30,30);
	boy.addImage(boyImg);
	boy.scale = 0.05;

	tree = new Tree(700,500,100,100);

	mango1 = new Mango (700,300,20,20);

	mango2 = new Mango( 720,320,20,20);

	mango3 = new Mango( 700,340,20,20);

	mango4 = new Mango( 700,450,20,20);

	mango5 = new Mango( 750,440,20,20);

	mango6 = new Mango( 680,380,20,20);

	mango7 = new Mango( 720,400,20,20);

	stone = new Stone(650,680,20,20);

	ground = new Ground(400,700,800,20);

	slingShot = new Slingshot(stone.body,{x:120,y:660});

	Engine.run(engine);
  
}
	
function draw() {
  rectMode(CENTER);
  background("white");

  	slingShot.display();
  	stone.display(); 
  	tree.display();
    mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	ground.display();

 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);
 detectCollision(stone,mango7);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	}
	
	function mouseReleased(){
		slingShot.fly();
	}

function detectCollision(stone,mango){
mangoBodyPosition = mango.body.position
stoneBodyPosition = stone.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<mango.r+stone.r){
	Matter.Body.setStatic(mango.body,false);
	console.log("hi");
}
}