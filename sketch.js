var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var myEngine,myWorld;
var child,childimage,childimage1;
var zombie,zombie1,zombieimage;
var monster,monsterimage;
var dance,dance1,danceimage;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");

	childimage = loadImage("c1.png");
	childimage1 = loadImage("c2.png");

	zombieimage = loadAnimation("z1.png","z2.png","z3.png");
	
    monsterimage = loadAnimation("m1.png","m2.png")

    danceimage = loadAnimation("d1.PNG","d2.png","d3.png");

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
    myEngine = Engine.create();
	myWorld = myEngine.world;

    dance1 = createSprite(670,580,10,10);
	dance1.addAnimation("dancing",danceimage);
	dance1.scale = 0.4;

    dance = createSprite(720,580,10,10);
	dance.addAnimation("dancing",danceimage);
	dance.scale = 0.4;

    zombie1 = createSprite(115,580,10,10);
	zombie1.addAnimation("walking",zombieimage);
	zombie1.scale = 0.7;

	zombie = createSprite(140,580,10,10);
	zombie.addAnimation("walking",zombieimage);
	zombie.scale = 0.7;
	
	monster = createSprite(110,600,10,10);
	monster.addAnimation("walking",monsterimage);
	monster.scale = 0.7;
	
	child = createSprite(480,600,10,10);
	child.addImage(childimage);
	child.scale = 0.6;

	packageSprite=createSprite(width/2, 300, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(myWorld, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(myWorld, ground);

	 box1 = new Box(400,650,250,20,100);
	 box2 = new Box(265,585,20,150,1);
	 box3 = new Box(535,585,20,150,1);
	 
	Engine.run(myEngine);
	
	//groundSprite.debug = true;
	//groundSprite.setCollider("rectangle",0,0,800,10);
  
}


function draw() {

	Engine.update(myEngine);

	rectMode(CENTER);
	background(0);

	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

	box1.display();
	box2.display();
	box3.display();


	drawSprites();
	
}

function keyPressed() {
 	if (keyCode === DOWN_ARROW) {
    
		Body.setStatic(packageBody, false); 
		child.y = 570;
		child.addImage(childimage1);
	}
}


