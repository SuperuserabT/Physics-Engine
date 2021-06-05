const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball1
var ball2
var ball3

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   object = Bodies.rectangle(200,390,400,20,object_options);
    World.add(world,object);

   var ballOptions= {
    restitution:1.5
   }

   var ballOptions2= {
       restitution:1.25
   }

   var ballOptions3= {
       restitution:1
   }

   ball1 = Bodies.circle(200,100,10,ballOptions);
   World.add(world,ball1);

   ball2 = Bodies.circle(100,100,20,ballOptions2);
   World.add(world,ball2);

   ball3 = Bodies.circle(300,100,30,ballOptions3);
   World.add(world,ball3);


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("lime")
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball1.position.x, ball1.position.y, 10);
    ellipse(ball2.position.x, ball2.position.y, 20);
    ellipse(ball3.position.x, ball3.position.y, 30);
}
