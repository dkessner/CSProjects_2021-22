//
// ParticleGenerator
//


class ParticleGenerator
{
    PVector position;
    ArrayList<Particle> particles;
    PImage face;
    boolean displayParticleCount = true;

    ParticleGenerator()
    {
        position = new PVector(width/2, height/2);
        particles = new ArrayList<Particle>();

        face = loadImage("face.png");
        face.resize(100, 100);
    }

    void setPosition(int x, int y)
    {
        position.set(x, y);
    }

    void createParticles(float rate)
    {
        do 
        {
            if (rate>1 || random(1)<rate)
            {
                PVector velocity = new PVector(random(-5, 5), random(-5, 5));
                particles.add(new Particle(position, velocity));
            }
        } while (--rate >= 0);
    }

    void drawFace(float factor)
    {
        pushMatrix();
        translate(position.x, position.y);
        scale(factor);
        imageMode(CENTER);
        image(face, 0, 0);
        popMatrix();
    }

    void display(float level)
    {
        for (Particle p : particles)
            p.display();

        float factor = 1 + 3*level;
        drawFace(factor);

        float rate = (level-.25) * 40;
        createParticles(rate);

        // remove dead particles
        for (int i=particles.size()-1; i>=0; i--)
            if (particles.get(i).alive == false)
                particles.remove(i);

        if (displayParticleCount)   
        {
            fill(255);
            textSize(20);
            text(particles.size(), 5, 25);
        }
    }
}


class Particle
{
    PVector position;
    PVector velocity;
    PVector acceleration;
    float r;
    int c;
    boolean alive;

    Particle(PVector position, PVector velocity)
    {
        this.position = position.copy();
        this.velocity = velocity.copy();
        this.acceleration = new PVector(0, .3);
        this.r = random(1, 5);
        this.c = color(50, random(200, 256), random(200, 256));
        this.alive = true;
    }

    void display()
    {
        fill(c);
        ellipse(position.x, position.y, r*2, r*2);

        position.add(velocity);
        velocity.add(acceleration);

        if (position.x < -r || position.x > width+r ||
            position.y < -r || position.y > height+r)
            alive = false;
    }
}

