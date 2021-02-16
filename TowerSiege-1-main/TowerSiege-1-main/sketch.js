const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score=0

function preload(){
  polygon=loadImage("polygon.png")  
}

function setup(){
  var canvas = createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;
 ground= new Ground(400,300,300,20)
 b1=new Box(300,275,30,40)
 b2=new Box(330,275,30,40)
 b3=new Box(360,275,30,40)
 b4=new Box(390,275,30,40)
 b5=new Box(420,275,30,40)
 b6=new Box(450,275,30,40)
 b7=new Box(480,275,30,40)
 
 b8=new Box(330,235,30,40)
 b9=new Box(360,235,30,40)
 b10=new Box(390,235,30,40)
 b11=new Box(420,235,30,40)
 b12=new Box(450,235,30,40)
 
 b13=new Box(360,195,30,40)
 b14=new Box(390,195,30,40)
 b15=new Box(420,195,30,40)
 
 b16=new Box(390,155,30,40)

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

 chain=new Chain(this.ball,{x:100,y:200})
  
}

function draw() {
  background("lightblue");  

  text("Points : "+score,width-400,50);

  Engine.update(engine);
  ground.display()
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  b8.display()
  b9.display()
  b10.display()
  b11.display()
  b12.display()
  b13.display()
  b14.display()
  b15.display()
  b16.display()

  b1.increase();
  b2.increase()
  b3.increase()
  b4.increase()
  b5.increase()
  b6.increase()
  b7.increase()
  b8.increase()
  b9.increase()
  b10.increase()
  b11.increase()
  b12.increase()
  b13.increase()
  b14.increase()
  b15.increase()
  b16.increase()


  imageMode(CENTER)
  image(polygon ,ball.position.x,ball.position.y,40,40);
  chain.display()
  drawSprites();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x: mouseX, y: mouseY})   
 }

 function mouseReleased(){
    chain.fly()   
   }

   function keyPressed(){
    if(keyCode === 32){
        chain.attach(this.ball);
    }
  }