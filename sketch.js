const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var v_options = {restitution:0.5};
var button1;
var button2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 ball = Bodies.circle(300,100,20,v_options)
 World.add(world,ball)
 button1 = createImg("up.png")
 button1.position(40,40)
 button1.size(50,50)
 button1.mouseClicked(v_force)
 button2 = createImg("right.png")
 button2.position(300,40)
 button2.size(50,50)
 button2.mouseClicked(h_force)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20,20)
  Engine.update(engine);
}
function v_force(){
Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})

}
function h_force(){
  Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}