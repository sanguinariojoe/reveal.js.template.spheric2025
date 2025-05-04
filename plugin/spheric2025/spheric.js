// Background image (just in case no other background has been set)
for (var slide of document.getElementsByTagName('section')){
    if (!(slide.getAttribute('data-background') ||
          slide.getAttribute('data-background-image') ||
          slide.getAttribute('data-background-video') ||
          slide.getAttribute('data-background-iframe')))
    {
        slide.setAttribute('data-background', 'rgb(242, 242, 242)')
        slide.setAttribute('data-background-image', 'imgs/background.png')
        slide.setAttribute('data-background-size', 'contain')
    }
}

// Logo
var __slides = document.getElementsByTagName('body')[0];
var __logo = document.createElement("div");
__logo.style.position = "absolute";
__logo.style.left = "76%";
__logo.style.top = "56%";
__logo.style.width = "21%";
__logo.style.height = "36%";
__logo.style.backgroundImage = "url('imgs/logo.png')";
__logo.style.backgroundSize = "contain";
__logo.style.backgroundRepeat = "no-repeat";
__logo.style.display = "flex";
__slides.appendChild(__logo);

Reveal.on('slidechanged', (event) => {
    if (event.currentSlide.getAttribute('data-spheric-logo')) {
        __logo.style.display = "flex";
    } else {
        __logo.style.display = "none";
    }
});
