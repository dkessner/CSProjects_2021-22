//
// hello_sound
//


import processing.sound.*;


AudioIn microphone;
SoundFile file;
Amplitude amp;

ParticleGenerator particleGenerator;
boolean showLevel = true;


void setup() 
{
    size(800, 800);
    noCursor();

    microphone = new AudioIn(this, 0);
    microphone.start();

    file = new SoundFile(this, "deeper_understanding_60.mp3");
    file.play();

    amp = new Amplitude(this);
    amp.input(file);

    particleGenerator = new ParticleGenerator();
}      


void draw() 
{
    background(0);

    float level = amp.analyze();

    if (showLevel)
        rect(0, height*(1-level), 50, height*(1-level));

    particleGenerator.setPosition(mouseX, mouseY);
    particleGenerator.display(level);
}


void keyPressed()
{
    if (key == 'l')
    {
        showLevel = !showLevel;
        particleGenerator.displayParticleCount = !particleGenerator.displayParticleCount;
    }
    else if (key == 'f')
    {
        file.play();
        amp.input(file);
    }
    else if (key == 'm')
    {
        file.pause();
        amp.input(microphone);
    }
}


