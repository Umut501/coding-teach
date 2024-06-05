let scrollDirection = 1;
let lastScrollY = window.scrollY;

function reverseAnimation() {
    const scrollingText = document.getElementById('scrolling-text');
    const computedStyle = window.getComputedStyle(scrollingText);
    const matrix = new DOMMatrixReadOnly(computedStyle.transform);
    const currentTranslateX = matrix.m41; // get current translateX value

    scrollingText.style.animation = 'none'; // pause the animation
    scrollingText.style.transform = `translateX(${currentTranslateX}px)`; // set current position
    setTimeout(() => {
        scrollingText.style.animation = `scroll 10s linear infinite ${scrollDirection === 1 ? 'normal' : 'reverse'}`;
    }, 10);
}

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        scrollDirection = -1;
    } else {
        scrollDirection = 1;
    }
    reverseAnimation();
    lastScrollY = window.scrollY;
});
