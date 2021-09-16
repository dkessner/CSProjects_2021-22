---
layout: page
title: Hello Sound
---

Click to start music, click again to switch to microphone.

<iframe src="hello_sound.html" width="100%" height="460rem"> </iframe>

This is actually a p5 version of the Processing sketch below.  One slight
difference: the web version uses mouse / touch where the Processing version
uses key presses.  I used my 
[processing-p5-convert](https://dkessner.github.io/processing-p5-convert/)
converter, followed by some manual changes due to differences between
the Sound libraries of Processing and p5.  

Some things to note about this example:
- ParticleGenerator is a separate class, with `setPosition()` and `display()` functions
- audio input can come from a music file or from the microphone
- the audio input is connected to an Amplitude object
- in `draw()`:
    - get the current audio level from the Amplitude object (between 0 and 1) 
    - use the audio level when we draw to screen:
        - audio level is shown as a rectangle on the left side
        - ParticleGenerator `display()` uses the audio level to change the face
          size and the particle rate

```java
{% include_relative hello_sound.pde %}```

[hello_sound (zip)](hello_sound.zip)

In case you're curious, the music track 
[Deeper Understanding](https://archive.org/details/DPH040)
is one of several 
tracks from [SistaSara](https://sarafuga.com/)
released with a 
[Creative Commons](https://creativecommons.org/licenses/by-nc-nd/4.0/) license.

