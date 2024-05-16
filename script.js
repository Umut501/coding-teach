// script.js
document.addEventListener('DOMContentLoaded', () => {
    const stickman = document.getElementById('stickman');

    document.addEventListener('mousemove', (event) => {
        stickman.style.left = `${event.pageX}px`;
        stickman.style.top = `${event.pageY}px`;
        stickman.style.display = 'block';
    });

    let isWalking = false;
    let walkTimeout;

    document.addEventListener('mousemove', () => {
        if (!isWalking) {
            stickman.style.animationPlayState = 'running';
            isWalking = true;
        }
        
        clearTimeout(walkTimeout);
        walkTimeout = setTimeout(() => {
            stickman.style.animationPlayState = 'paused';
            isWalking = false;
        }, 100); // Adjust the delay as needed
    });
});
