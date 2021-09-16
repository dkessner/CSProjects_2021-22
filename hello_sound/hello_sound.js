class ArrayList extends Array {
    constructor() {
        super(...[]);
    }
    size() {
        return this.length;
    }
    add(x) {
        this.push(x);
    }
    get(i) {
        return this[i];
    }
    remove(i) {
        this.splice(i, 1);
    }
}

//
// hello_sound
//
// [processing-p5-convert] import processing.sound.*;

let microphone;
let file;
let amp;

let particleGenerator;
let face;
let showLevel = true;

let playingFile = false;


function setup() {
    createCanvas(500, 500);
    noCursor();

    microphone = new p5.AudioIn();
    microphone.start();

    file.play();

    amp = new p5.Amplitude();
    amp.setInput(file);

    particleGenerator = new ParticleGenerator();
}
function preload() {
    file = loadSound("deeper_understanding_60.mp3");
    face = loadImage("face.png");
}
function draw() {
    background(0);
    let level = amp.getLevel();
    if (showLevel) rect(0, height * (1 - level), 50, height * (1 - level));
    particleGenerator.setPosition(mouseX, mouseY);
    particleGenerator.display(level);
}
function mousePressed() {
    if (playingFile) {
        file.stop();
        amp = new p5.Amplitude();
        amp.setInput(microphone);
    }
    else {
        file.stop();
        file.play();
        amp = new p5.Amplitude();
        amp.setInput(file);
    }
    playingFile = !playingFile;
} //
// ParticleGenerator
//
class ParticleGenerator {
    position;
    particles;
    face;
    displayParticleCount = true;
    constructor() {
        this.position = new p5.Vector(width / 2, height / 2);
        this.particles = new ArrayList();
        this.face = face;
        this.face.resize(100, 100);
    }
    setPosition(x, y) {
        this.position.set(x, y);
    }
    createParticles(rate) {
        do {
            if (rate > 1 || random(1) < rate) {
                let velocity = new p5.Vector(random(-5, 5), random(-5, 5));
                this.particles.add(new Particle(this.position, velocity));
            }
        } while (--rate >= 0);
    }
    drawFace(factor) {
        push();
        translate(this.position.x, this.position.y);
        scale(factor);
        imageMode(CENTER);
        image(this.face, 0, 0);
        pop();
    }
    display(level) {
        for (let p of this.particles) p.display();
        let factor = 1 + 3 * level;
        this.drawFace(factor);
        let rate = level * 40;
        this.createParticles(rate); // remove dead particles
        for (let i = this.particles.size() - 1; i >= 0; i--)
            if (this.particles.get(i).alive == false) this.particles.remove(i);
        if (this.displayParticleCount) {
            fill(255);
            textSize(20);
            text(this.particles.size(), 5, 25);
        }
    }
}
class Particle {
    position;
    velocity;
    acceleration;
    r;
    c;
    alive;
    constructor(position, velocity) {
        this.position = position.copy();
        this.velocity = velocity.copy();
        this.acceleration = new p5.Vector(0, 0.3);
        this.r = random(1, 5);
        this.c = color(50, random(200, 256), random(200, 256));
        this.alive = true;
    }
    display() {
        fill(this.c);
        ellipse(this.position.x, this.position.y, this.r * 2, this.r * 2);
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        if (
            this.position.x < -this.r ||
            this.position.x > width + this.r ||
            this.position.y < -this.r ||
            this.position.y > height + this.r
        )
            this.alive = false;
    }
}

