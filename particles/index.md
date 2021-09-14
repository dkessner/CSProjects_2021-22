---
layout: page
title: Particle generators
---

Here's an example of a simple particle generator in Processing.  The next step
would be to make a ParticleGenerator class with this functionality, to make it
easier to use in your program.

<main id="ppconvert" src="particles.pde"></main>

[particles.pde](particles.pde)

```java
{% include_relative particles.pde %}```

<script>
    // hack until I fix stuff in processing-p5-convert
    window.onload = function() {
        setTimeout( function() {
            let p = document.getElementById("ppconvert");
            let c = document.getElementById("defaultCanvas0");
            p.appendChild(c);
        }, 300);
    }
</script>
