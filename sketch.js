// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.



var engine, world;
var tanker, ground, shootingBall,box1,box2;
var shootBall;
var flag = 0;


function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,380,1300,20);
    invisibleGround = new Ground(550,350,550,20);

    tanker = new Tanker(200,325,150,200);

    box1 = new Box(900,315,50,50);

    box2 = new Box(900,295,50,50);
    shootingBall = new CannonBall(400,200);

    //shootBall = new ShootBall(shootingBall.body,{x:400,y:100});

}
    


function draw() {
    background(255);
    Engine.update(engine);
    ground.display();

    //invisibleGround.display();

    tanker.display();

    box1.display();

    box2.display();

    // if(shootingBall.speed>){
        shootingBall.display();
    //}

    //shootBall.display();

    

    //if(flag === 1){
        
    //}
    
    //shootingBall.visible = false;

    // if(shootingBall.body.position.x>400){
    //     shootBall.shoot();
        
    // }
}



// function keyPressed() {
//     if(keyCode === 32){
//         //shootBall.attach(shootingBall.body);


//     }
    
// }

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setVelocity(shootingBall.body,{x:30,y:0});
        
        //shootBall.shoot();
        //shootingBall.body.speed = 5;
    }
}