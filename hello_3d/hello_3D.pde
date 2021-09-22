

PVector eye;
PVector eyeVelocity;

PImage fur;


void setup() 
{
    size(800, 800, P3D);
    eye = new PVector(0, 0, (height/2.0) / tan(PI*30.0 / 180.0));
    eyeVelocity = new PVector();
    fur = loadImage("fur.jpg");
}

void draw() 
{
  background(0);

  camera(eye.x, eye.y, eye.z,
         0, 0, 0, 
         0, 1, 0);

  stroke(100);
  box(100);

  strokeWeight(5);
  stroke(255, 0, 0);
  line(0, 0, 0, 200, 0, 0);

  stroke(0, 255, 0);
  line(0, 0, 0, 0, 200, 0);
    
  stroke(0, 0, 255);
  line(0, 0, 0, 0, 0, 200);

  eye.add(eyeVelocity);

    textureMode(NORMAL);
    noStroke();

    beginShape();
    texture(fur);
    vertex(100, 100, 0, 0, 0);
    vertex(100, 300, 0, 0, 1);
    vertex(300, 300, 0, 1, 1);
    vertex(300, 100, 0, 1, 0);
    endShape(CLOSE);

}


void keyPressed()
{
    final float d = 50;
    if (keyCode == LEFT)
        eyeVelocity.x = -d;
    else if (keyCode == RIGHT)
        eyeVelocity.x = d;
    else if (keyCode == DOWN)
        eyeVelocity.y = d;
    else if (keyCode == UP)
        eyeVelocity.y = -d;
}


void keyReleased()
{
    if (keyCode == LEFT || 
        keyCode == RIGHT ||
        keyCode == DOWN ||
        keyCode == UP)
      eyeVelocity.set(0, 0, 0);
}


