//
// intro.js
//


introSketchMaker = function(sketch) {

class Ball 
{
    position;
    velocity;
    hue;
    alpha;
    radius;

    constructor() 
    {
        this.position = sketch.createVector(sketch.mouseX, sketch.mouseY);

        this.velocity = sketch.createVector(sketch.pmouseX, sketch.pmouseY);
        this.velocity.sub(this.position);
        this.velocity.mult(.1);

        this.hue = currentHue;
        this.alpha = 255;

        this.radius = 0;
    }

    display()
    {
        sketch.noFill();
        sketch.stroke(this.hue, 100, 50, this.alpha);
        sketch.ellipse(this.position.x, this.position.y, this.radius*2, this.radius*2);
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.alpha--;
        this.radius++;
    }
}

let balls = [];


sketch.setup = function() {
    sketch.createCanvas(400, 400);
    sketch.colorMode(sketch.HSB, 100);
}


let currentHue = 50;


sketch.draw = function()
{
    sketch.background(0);

    for (let b of balls)
        b.display();

    if (++currentHue > 100) currentHue = 0;

    balls.push(new Ball());
    sketch.removeDeadBalls();
}


sketch.removeDeadBalls = function()
{
    for (let i=balls.length-1; i>=0; i--)
    {
        if (balls[i].alpha <= 0)
            balls.splice(i, 1);
    }
}


}
