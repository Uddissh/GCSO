var car1, car2, car3, wall1, wall2, wall3;
var speed1, speed2, speed3, weight1, weight2, weight3;
var deformation1, deformation2, deformation3;

function setup() {
  createCanvas(1600,800);
  speed1 = random(55, 90);
  speed2 = random(55, 90);
  speed3 = random(55, 90);
  weight1 = random(400, 1500);
  weight2 = random(400, 1500);
  weight3 = random(400, 1500);
  car1 = createSprite(200, 200, 20, 10);
  car1.shapeColor = "white";
  car2 = createSprite(200, 300, 20, 10);
  car2.shapeColor = "white";
  car3 = createSprite(200, 400, 20, 10);
  car3.shapeColor = "white";
  wall1 = createSprite(1500, 200, 10, 50);
  wall1.shapeColor = "lightblue";
  wall2 = createSprite(1500, 300, 10, 50);
  wall2.shapeColor = "lightblue";
  wall3 = createSprite(1500, 400, 10, 50);
  wall3.shapeColor = "lightblue";
  car1.velocityX = speed1;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  deformation1 = 0.5 * weight1 * speed1 * speed1;
  deformation2 = 0.5 * weight2 * speed2 * speed2;
  deformation3 = 0.5 * weight3 * speed3 * speed3;
}

function draw() {
  background("black");
  
  
  
  if (car1.collide(wall1)) {
  if (deformation1 < 100) {
    car1.shapeColor = "green";
  }
  if (deformation2 > 100 && deformation2 < 180) {
    car1.shapeColor = "yellow";
  }
  if (deformation3 > 180) {
    car1.shapeColor = "red";
  }
}
  
  if (car2.collide(wall2)) {
  if (deformation2 < 100) {
    car2.shapeColor = "green";
  }
  if (deformation2 > 100 && deformation2 < 180) {
    car2.shapeColor = "yellow";
  }
  if (deformation2 > 180) {
    car2.shapeColor = "red";
  }
}

if (car3.collide(wall3)) {
  if (deformation3 < 100) {
    car3.shapeColor = "green";
  }
  if (deformation3 > 100 && deformation2 < 180) {
    car3.shapeColor = "yellow";
  }
  if (deformation3 > 180) {
    car3.shapeColor = "red";
  }
}
stroke("white");
textSize(30);
text("CAR 1", 1500, 160);
stroke("white");
textSize(30);
text("CAR 2", 1500, 260)
stroke("white");
textSize(30);
text("CAR 3", 1500, 360);
  drawSprites();
}