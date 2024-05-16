document.addEventListener('mousemove', (event) => {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        const pupil = eye.querySelector('.pupil');
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;
        const deltaX = event.clientX - eyeCenterX;
        const deltaY = event.clientY - eyeCenterY;
        const angle = Math.atan2(deltaY, deltaX);
        const maxPupilMovement = rect.width / 4;
        const pupilX = maxPupilMovement * Math.cos(angle);
        const pupilY = maxPupilMovement * Math.sin(angle);
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
});
