const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground,divison1
var particles = [];
var plinkos = [];
var divison = [];
var divisonHeight = 300;

function setup(){
    createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    for (var k = 0; k<=width; k = k+80){
        divison.push(new Divison(k, height-divisonHeight/2, 10, divisonHeight))
    }

    for (var j=40; j<=width; j=j+50){
        plinkos.push(new Plinko(j,75))
    }

    for (var j=15; j<=width; j=j+50){
        plinkos.push(new Plinko(j,175))
    }

    for (var j=40; j<=width; j=j+50){
        plinkos.push(new Plinko(j,275))
    }

    for (var j=15; j<=width; j=j+50){
        plinkos.push(new Plinko(j,375))
    }
    
    ground = new Ground(240,780,480,20);
    divison1 = new Divison(0,650,15,250);
    divison2 = new Divison(80,650,15,250);
    divison3 = new Divison(160,650,15,250);
    divison4 = new Divison(240,650,15,250);
    divison5 = new Divison(320,650,15,250);
    divison6 = new Divison(400,650,15,250);
    divison7 = new Divison(480,650,15,250);

}


function draw() {
    background(0);
    Engine.update(engine);

    if(frameCount%60===0){
        particles.push(new Particle(random(0,480),10))
    }

    for (i=0;i<plinkos.length;i++){
        plinkos[i].display()
    }

    for (var k = 0; k<particles.length; k++){
        particles[k].display()
    }
    ground.display();
    divison1.display();
    divison3.display();
    divison2.display();
    divison4.display();
    divison5.display();
    divison6.display();
    divison7.display();
}