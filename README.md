gsap is a javascript library
// that allows you to animate DOM elements.
// It's commonly used for creating smooth animations and transitions on web pages.
// In this example, we're using gsap to animate the opacity of an element.
// The animation will start when the element is hovered over, and it will last for 0.
// seconds. This means the animation will be instantaneous, but it will still be
// triggered by the hover event.
gsap.to(".animate", {
    opacity: 1,
    duration: 0
    });
    