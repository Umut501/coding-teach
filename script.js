   // JavaScript to handle scrolling animation for both paths
   document.addEventListener('DOMContentLoaded', () => {
    const textPath2 = document.getElementById('textPath2');
    const path2 = document.getElementById('curvePath');
    
    // Get the total length of the paths
    const pathLength2 = path2.getTotalLength();

    document.addEventListener('scroll', () => {
        // Calculate the scroll percentage
        let scrollPosition = window.scrollY;
        let windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        let scrollPercent = scrollPosition / windowHeight;

        let offset2 = scrollPercent * pathLength2;
        
        textPath2.setAttribute('startOffset', offset2);
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const textPath = document.querySelector("textPath");

  textPath.animate([
      { offsetDistance: '100%' },
      { offsetDistance: '0%' }
  ], {
      duration: 10000, // Duration of the animation in milliseconds
      iterations: Infinity, // Repeat infinitely
      easing: 'linear' // Use a linear animation timing function
  });
});
