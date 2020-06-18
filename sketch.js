const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rectangle1;

function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    fill(255,0,0);
    rectangle1 = new RECTANGLES(250,400,300,200);
    rectangle2 = new RECTANGLES(80,350,70,300);
    rectangle3 = new RECTANGLES(420,350,70,300);
    rectangle4 = new RECTANGLES(250,250,70,100);
    rectangle5 = new RECTANGLES(80,250,20,40);
    rectangle6 = new RECTANGLES(420,250,20,40);
    rectangle7 = new RECTANGLES(250,250,20,40);

    rectangle8 = new RECTANGLES(140,285,20,30);
    rectangle9 = new RECTANGLES(190,285,20,30);
    rectangle10 = new RECTANGLES(310,285,20,30);
    rectangle11 = new RECTANGLES(360,285,20,30);

    fill(0,255,0);
    triangle1 = new TRIANGLES(80,100,3,50);
    triangle2 = new TRIANGLES(420,100,3,50);
    triangle3 = new TRIANGLES(250,100,3,50);

}

function draw(){
    background(0);
    Engine.update(engine);
    
    fill(0,255,0);
    rectangle1.display();

    fill(255,0,0);
    rectangle2.display();
    rectangle3.display();

    rectangle4.display();

    fill(255,255,0);
    rectangle5.display();
    rectangle6.display();
    rectangle7.display();
    rectangle8.display();
    rectangle9.display();
    rectangle10.display();
    rectangle11.display();

    fill(0,255,0);
    triangle1.display();
    triangle2.display();
    triangle3.display();

}
