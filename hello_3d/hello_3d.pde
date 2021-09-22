PVector eye;
PImage fur;

void setup() 
{
    size(600, 600, P3D);
    eye = new PVector(0, 0, height/2.0/tan(PI*30/180));
    fur = loadImage("fur.jpg");
}

void draw()
{
    background(0);
    
    camera(eye.x, eye.y, eye.z,
           0, 0, 0,
           0, 1, 0);
    
    box(100);
    
    strokeWeight(5);
    stroke(255, 0, 0);
    line(0, 0, 0, 200, 0, 0);
    
    stroke(0, 255, 0);
    line(0, 0, 0, 0, 200, 0);
    
    stroke(0, 0, 255);
    line(0, 0, 0, 0, 0, 200);
    
    textureMode(NORMAL);
    
    beginShape();
    texture(fur);
    vertex(100, 100, 0, 0, 0);
    vertex(300, 100, 0, 1, 0);
    vertex(300, 300, 0, 1, 1);
    vertex(100, 300, 0, 0, 1);
    endShape();
}

void keyPressed()
{
    int change = 50;
    
    if (keyCode == RIGHT)
        eye.x += change;
    else if (keyCode == LEFT)
        eye.x -= change;
    else if (keyCode == UP)
        eye.y -= change;
    else if (keyCode == DOWN)
        eye.y += change;
}
