const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;



function preload() {
 bgImg = loadImage("assets/background.gif")
 towerImg = loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  // creating an Object of class Ground
  ground = new Ground(0,height-1, width*2,1)
  console.log(ground)
  rectMode(CENTER)

  var options = {
    isStatic : true
  }
  tower = Bodies.rectangle(100,height-250,400,700,options)
  World.add(world,tower)

}

function draw() {
  background(0);
  rectMode(CENTER)
  imageMode (CENTER)
  image (bgImg,width/2,height/2,width,height)
  Engine.update(engine);

  ground.display()
  image(towerImg,tower.position.x,tower.position.y,200,350)
   
}
