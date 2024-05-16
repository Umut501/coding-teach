document.addEventListener('mousemove', (event) => {
    const head = document.querySelector('.head');
    const x = event.clientX;
    const y = event.clientY;
    head.style.left = x + 'px';
    head.style.top = y + 'px';
});
