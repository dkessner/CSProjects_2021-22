let eye;
let fur;
function setup() {
    createCanvas(400, 400, WEBGL);
    eye = new p5.Vector(0, 0, height / 2.0 / tan((PI * 30) / 180));
}
function preload() {
    fur = loadImage("fur.jpg");
}
function draw() {
    translate(-width / 2, -height / 2);
    background(0);
    camera(eye.x, eye.y, eye.z, 0, 0, 0, 0, 1, 0);
    texture(0);
    fill(255);
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
function keyPressed() {
    let change = 50;
    if (keyCode == RIGHT_ARROW) eye.x += change;
    else if (keyCode == LEFT_ARROW) eye.x -= change;
    else if (keyCode == UP_ARROW) eye.y -= change;
    else if (keyCode == DOWN_ARROW) eye.y += change;
}

