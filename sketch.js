var box
function setup() {
  createCanvas(400,400);
  box=createSprite (200,200,23,23);
}

function draw() 
{
  if (keyIsDown(DOWN_ARROW))
  {
    background('red');
  }
  if (keyIsDown(UP_ARROW))
  {
    background('blue');
  }
  if (keyIsDown(LEFT_ARROW))
  {
    background('yellow');
  }
  if (keyIsDown(RIGHT_ARROW))
  {
    background('green');
  }
  background(30);

}









