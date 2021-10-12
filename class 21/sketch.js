   var fixedRect, movingRect;
   var o1,o2,o3;
   var p1,p2;
   function setup() {
    createCanvas(1200,800);
    fixedRect = createSprite(600, 400, 50, 80);
    fixedRect.shapeColor = "green";
    fixedRect.debug = true;
    movingRect = createSprite(400,200,80,30);
    movingRect.shapeColor = "green";
    movingRect.debug = true;
    o1 = createSprite(350, 400, 50, 80);
    o2 = createSprite(500, 400, 50, 80);
    o3 = createSprite(700, 400, 50, 80);
    o1.shapeColor = "green";
    o2.shapeColor = "green";
    o3.shapeColor = "green";
  }
  
  function draw() {
    background(0,0,0);  
    movingRect.x = World.mouseX;
    movingRect.y = World.mouseY;
    if (touching(movingRect,o1)){
      movingRect.shapeColor = "red";
      o1.shapeColor = "red";
    }
    else {
      movingRect.shapeColor = "green";
      o1.shapeColor = "green";
    }
    if (touching(movingRect,o2)){
      movingRect.shapeColor = "red";
      o2.shapeColor = "red";
    }
    else {
      movingRect.shapeColor = "green";
      o2.shapeColor = "green";
    }
    if (touching(movingRect,o3)){
      movingRect.shapeColor = "red";
      o3.shapeColor = "red";
    }
    else {
      movingRect.shapeColor = "green";
      o3.shapeColor = "green";
    }
    if (touching(movingRect,fixedRect)){
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
    }
    else {
      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
    }
    drawSprites();
  }
