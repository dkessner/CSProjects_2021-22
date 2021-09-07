---
layout: page
title: Hello p5
---

<iframe src="hello_p5.html" width="100%" height="420rem"> </iframe>

This example has 3 files:
- `hello_p5.html`
- `hello_p5.js`
- `p5.min.js`


[hello_p5.js](hello_p5.js)

```javascript
{% include_relative hello_p5.js %}```

[hello_p5.html](hello_p5.html)

```html
{% include_relative hello_p5.html%}```


You can download `p5.min.js` from the p5 website:  
[[download page](https://p5js.org/download/)]
[[direct link](https://github.com/processing/p5.js/releases/download/v1.4.0/p5.min.js)]

As an alternative to keeping your own copy of `p5.min.js`, you can tell your webpage
to load it from a Content Delivery Network (CDN):
```html
<script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.min.js"></script>
```

