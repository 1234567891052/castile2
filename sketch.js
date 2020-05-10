const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var plank1, tag;
var backgroundImg,platform,holder;
var Projectile, Catapault;
score = 0;


function setup(){
    createCanvas(1200,680);
    engine = Engine.create();
    world = engine.world;

    log1 = new plank(600,200,70,70);
    log2 = new plank(600,270,70,70);
    log8 =  new plank(600,340,70,70);
  
    log14=  new plank(530,421,70,70);
    log15= new plank(530,421,70,70);
    log16= new plank(530,421,70,70);
    log17= new plank(530,421,70,70);

    log4 = new plank(740,200,70,70);
    log5= new plank(740,270,70,70);
    log6 = new plank(740,340,70,70);
    log18 = new plank(810,421,70,70);
    log19 = new plank(810,421,70,70);
    log20 = new plank(810,421,70,70);
    log21 = new plank(810,421,70,70);

    log9 = new plank(670,200,70,70);
    log10 = new plank(670,340,70,70);

    ground = new Ground(600,height,1200,20);    
   
    Projectile = new projectile(600,500,70,50);

   Catapault = new catapault(Projectile.body,{x:100, y:400},{x:160,y:400});

    holder= new Ground(110,370,70,50);
    
}

function draw(){
    background("white");
    Engine.update(engine);

    noStroke();
    textSize(20);
    fill("black");
    text("Score  " + score, width-300, 50);

    strokeWeight(4);
    stroke("black");
    
    ground.display();

    Projectile.display();
    Catapault.display();    

    log1.display();
    log1.score();
    log2.display();
    log2.score();
 
    log4.display();
    log4.score();
    log5.display();
    log5.score();
    log6.display();
    log6.score();
 
    log8.display();
    log8.score();
    log9.display();
    log9.score();
    log10 .display();
    log10.score();
 
    log14.display();
    log14.score();
    log15.display();
    log15.score();
    log16.display();
    log16.score();
    log17.display();
    log17.score();
    log18.display();
    log18.score();
    log19.display();
    log19.score();
    log20.display();
    log20.score();
    log21.display();
    log21.score();
 
    holder.display();
   

 
}
function mouseDragged(){
Matter.Body.setPosition(Projectile.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
Catapault.fly();
}

function keyPressed(){
    if(keyCode === 32){
       Matter.Body.setPosition(Projectile.body,{x:200, y:50});
       Catapault.attach(Projectile.body);
    }
}