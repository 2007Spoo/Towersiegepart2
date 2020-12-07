const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block;
var stand;
var a;
var polygon;
var slingShot;
var circles=[];

function setup() {
  createCanvas(800,800);
  //stroke(255)
  
  engine = Engine.create();
  world = engine.world;
 
  polygon= Bodies.circle(50,200,20);

  World.add(world, polygon);

  imagemode(CENTER);
  loadImage= addImage("polygon.png");

  block = new Block(390,155,30,40);
  block1= new Block(330,235,30,40);
   block2= new Block(360,235,30,40);
   block3= new Block(390,235,30,40);
   block4= new Block(420, 235, 30,40);
   block5= new Block(450,235,30,40);
   block6= new Block(450,235,30,40);
   block7= new Block(360,195,30,40);
   block8= new Block(390,195,30,40);
   block9= new Block(420,195,30,40);
   block10= new Block(420,195,30,40);
  
   stand= new Ground(200,200,5,5);
   
   
   slingShot = new Slingshot(polygon.body, {x: 250, y:150});


  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  a=a-1;
  Engine.update(engine);
  
  block.display();
  block1.display();
  
  block2.display();
  
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();

  stand.display();
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 
 drawSprites();
}

function keyPressed()
{
    if(keyCode === 32)
    {
      slingshot.attach(polygon.body);
    }
}

function mouseDragged()
{
    Matter.Body.setPosition(polygon.body, {x : mouseX, y: mouseY})
}

function mouseReleased()
{
    slingShot.fly()
}