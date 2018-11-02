var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var borders = [];
var cursorX;
var cursorY;
var w = document.body.clientWidth;
var h = document.body.clientHeight;
var ground;
var renderer = Render.create({
  element: stage,
  canvas: canvas,
  context: context,
  engine: engine,
  options: {
    bounds: true,
    showBounds: false,
    background: "transparent",
    width: w,
    height: h,
    wireframes: false
  }
});

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(400, width, height, 100, options);

  World.add(world, ground);
}

// function keyPressed() {
//   if (key == ' ') {
//   }
// }





//start
function mousePressed() {
  boxes.push(new Box(mouseX, mouseY, random(1,100), random(1,100)));
}

function draw() {
  background(51);
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  noStroke(255);
  fill(170);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 100);

}