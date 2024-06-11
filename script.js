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

document.addEventListener('mousemove', function (e) {
    let x = (e.clientX / window.innerWidth) * 100;
    let y = (e.clientY / window.innerHeight) * 100;
    document.querySelectorAll('.centered-text span').forEach(span => {
      span.style.backgroundPosition = `${x}% ${y}%`;
    });
  });

  $(document).ready(function() {
    var containers = $('.container');
  
    if (containers.length) {
      containers.each(function() {
        var container = $(this);
  
        // Support small text - copy to fill screen width
        if (container.find('.scrolling-text').outerWidth() < $(window).width()) {
          var windowToScrolltextRatio = Math.round($(window).width() / container.find('.scrolling-text').outerWidth()),
            scrollTextContent = container.find('.scrolling-text .scrolling-text-content').text(),
            newScrollText = '';
          for (var i = 0; i < windowToScrolltextRatio; i++) {
            newScrollText += ' ' + scrollTextContent;
          }
          container.find('.scrolling-text .scrolling-text-content').text(newScrollText);
        }
  
        // Init variables and config
        var scrollingText = container.find('.scrolling-text'),
          scrollingTextWidth = scrollingText.outerWidth(),
          scrollingTextHeight = scrollingText.outerHeight(true),
          startLetterIndent = parseInt(scrollingText.find('.scrolling-text-content').css('font-size'), 10) / 4.8,
          startLetterIndent = Math.round(startLetterIndent),
          scrollAmountBoundary = Math.abs($(window).width() - scrollingTextWidth),
          transformAmount = 0,
          leftBound = 0,
          rightBound = scrollAmountBoundary,
          transformDirection = container.hasClass('left-to-right') ? -1 : 1,
          transformSpeed = 200;
  
        // Read transform speed
        if (container.attr('speed')) {
          transformSpeed = container.attr('speed');
        }
  
        // Make scrolling text copy for scrolling infinity
        container.append(scrollingText.clone().addClass('scrolling-text-copy'));
        container.find('.scrolling-text').css({ 'position': 'absolute', 'left': 0 });
        container.css('height', scrollingTextHeight);
  
        var getActiveScrollingText = function(direction) {
          var firstScrollingText = container.find('.scrolling-text:nth-child(1)');
          var secondScrollingText = container.find('.scrolling-text:nth-child(2)');
  
          var firstScrollingTextLeft = parseInt(container.find('.scrolling-text:nth-child(1)').css("left"), 10);
          var secondScrollingTextLeft = parseInt(container.find('.scrolling-text:nth-child(2)').css("left"), 10);
  
          if (direction === 'left') {
            return firstScrollingTextLeft < secondScrollingTextLeft ? secondScrollingText : firstScrollingText;
          } else if (direction === 'right') {
            return firstScrollingTextLeft > secondScrollingTextLeft ? secondScrollingText : firstScrollingText;
          }
        }
  
        $(window).on('wheel', function(e) {
          var delta = e.originalEvent.deltaY;
  
          if (delta > 0) {
            // going down
            transformAmount += transformSpeed * transformDirection;
            container.find('.scrolling-text .scrolling-text-content').css('transform', 'skewX(10deg)');
          } else {
            transformAmount -= transformSpeed * transformDirection;
            container.find('.scrolling-text .scrolling-text-content').css('transform', 'skewX(-10deg)');
          }
          setTimeout(function() {
            container.find('.scrolling-text').css('transform', 'translate3d(' + transformAmount * -1 + 'px, 0, 0)');
          }, 10);
          setTimeout(function() {
            container.find('.scrolling-text .scrolling-text-content').css('transform', 'skewX(0)');
          }, 500)
  
          // Boundaries
          if (transformAmount < leftBound) {
            var activeText = getActiveScrollingText('left');
            activeText.css({ 'left': Math.round(leftBound - scrollingTextWidth - startLetterIndent) + 'px' });
            leftBound = parseInt(activeText.css("left"), 10);
            rightBound = leftBound + scrollingTextWidth + scrollAmountBoundary + startLetterIndent;
  
          } else if (transformAmount > rightBound) {
            var activeText = getActiveScrollingText('right');
            activeText.css({ 'left': Math.round(rightBound + scrollingTextWidth - scrollAmountBoundary + startLetterIndent) + 'px' });
            rightBound += scrollingTextWidth + startLetterIndent;
            leftBound = rightBound - scrollingTextWidth - scrollAmountBoundary - startLetterIndent;
          }
        });
      })
    }
  });
   // JavaScript to handle scrolling animation for both paths
   document.addEventListener('DOMContentLoaded', () => {
    const textPath2 = document.getElementById('textPath2');
    const path2 = document.getElementById('curvePath2');
    
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
