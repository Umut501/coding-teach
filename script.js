let lastX = 0;
let lastY = 0;
let lastTime = Date.now();

document.addEventListener('mousemove', (e) => {
    const bubbleTea = document.getElementById('bubble-tea');
    const bubbles = document.querySelectorAll('.bubble');
    const x = e.clientX;
    const y = e.clientY;
    const currentTime = Date.now();

    // Make the cup follow the cursor
    bubbleTea.style.left = `${x - bubbleTea.offsetWidth / 2}px`;
    bubbleTea.style.top = `${y - bubbleTea.offsetHeight / 2}px`;

    // Calculate the distance moved
    const dx = x - lastX;
    const dy = y - lastY;
    const dt = currentTime - lastTime;

    // Calculate the speed (pixels per millisecond)
    const speed = Math.sqrt(dx * dx + dy * dy) / dt;

    // Apply shaking effect to bubbles based on speed
    const shakeIntensity = Math.min(speed * 20, 20); // Cap the shake intensity

    bubbles.forEach(bubble => {
        const bubbleAngleX = (Math.random() - 0.5) * shakeIntensity;
        const bubbleAngleY = (Math.random() - 0.5) * shakeIntensity;
        bubble.style.transform = `translate(${bubbleAngleX}px, ${bubbleAngleY}px)`;
    });

    // Update last position and time
    lastX = x;
    lastY = y;
    lastTime = currentTime;
});
