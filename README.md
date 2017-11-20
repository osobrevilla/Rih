# Rih.js - Responsive Image Handler

This helper is based on the tag sintax config used on the work of [Koen Vendrik](https://github.com/kvendrik/responsive-images.js). 
It works the same way but with a completely rewritten core and add a settings cache system to make it much faster and responsive nonblocking screen resize.

## How use

### 1. Add the rih.js in html head tag or where you like!

```html
<script src="Rih.js"></script>
````

### 2. Config markup

```html
<img alt="Puppy!" 
    class="responsive" 
    data-src-base="images/"
    data-src-base2x="images/retina/"
    data-src="<480:smallest.jpg, <768:small.jpg, <960:medium.jpg, >960:big.jpg" />
<noscript><img alt="Puppy!" src="images/medium.jpg" /></noscript>
```

### 3. Run

```html
<script>
    var allResponsiveImages = getElementsByClassName(document, 'responsive');
    var rih = new Rih(allResponsiveImages);
    rih.init();
</script>
```

### API

```javascript
Rih.addImage(imgNode)
```
