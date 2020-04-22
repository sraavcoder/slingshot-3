///const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Engine = Matter.Engine;
//const Constraint = Matter.Constraint;
//const MouseConstraint = Matter.MouseConstraint;
const{Engine,World,Bodies,Constraint,MouseConstraint,Mouse} = Matter;

var engine, world;


var boxes = [];
var boxe = [];
var b = [];
var bo = [];
var be = [];
var bx = [];
var score = 0;



function setup() {
  
createCanvas(1109,500);


 engine = Engine.create();
world = engine.world 

base2 = new Ground(570,170,200,20);
base = new Ground(400,480,10000000,20);
base3 = new Ground(400,670,10000000,20);



ball = new Circle(150,350);

for(var i = 0;i <7;i++){
  boxes[i] = new Box(700,450,40,60);
}
for(var i = 0;i <5;i++){
  boxe[i] = new Box(700,430,40,60);
}
for(var i = 0;i <3;i++){
  b[i] = new Box(700,400,40,60);
}
for(var i = 0;i <1;i++){
  bo[i] = new Box(700,370,40,60);
}


for(var i = 0;i <3;i++){
  bx[i] = new Box(570,140,40,60);
}
for(var i = 0;i <1;i++){
  be[i] = new Box(570,110,40,60);
}




var mouse = Mouse.create(canvas.elt);
var options =  {
  mouse:mouse,
  element:canvas.elt
}

mConstraint = MouseConstraint.create(engine,options);
World.add(world,mConstraint)


slingshot = new Spring(ball.body,{x:190,y:310})

 
}

function draw() {
  background(0);  
  
  
Engine.update(engine);

base.display();
base2.display();
base3.display();


for(var box of boxes){
  fill(249,183,58);
  box.display();
}


for(var box of boxe){
  fill(218,66,87);
  box.display();
}

for(var box of b){
  fill(0,157,248);
  box.display();
}
for(var box of bo){
  fill("green")
  box.display();
}



for(var box of be){
 fill(0,157,248);
  box.display();
}
for(var box of bx){
  fill(218,66,87);
  box.display();
}




ball.display();

slingshot.display();


 
textSize(15);
text('grab the ball with your mouse and release it to shoot it',10,30);
text('to reshoot the ball again press space bar',10,60);
text('remember that you can reshoot the ball only when it is in rest position',10,90);
text('the score will increase more if u beat the boxes hardly',10,120);
textSize(20);
text("Score : " + score, 1000, 50)

}

function mouseReleased(){
 slingshot.fly();
 
}

function keyPressed(){
  if(keyCode == 32 && ball.body.speed < 1){  
    Matter.Body.setPosition(ball.body, {x: 150, y:350 });
    
    slingshot.attach(ball.body);
 } 
}
