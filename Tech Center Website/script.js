document.addEventListener("DOMContentLoaded", function() {
    const borderElement = document.querySelector('.animated-border');

    let borderStyle = [
        '2px solid transparent',
        '2px solid #f3661e',
        '2px solid #f3661e',
        '2px solid transparent'
    ];

    let currentBorder = 0;

    function animateBorder() {
        borderElement.style.borderTop = borderStyle[(currentBorder + 1) % 4];
        borderElement.style.borderRight = borderStyle[(currentBorder + 2) % 4];
        borderElement.style.borderBottom = borderStyle[(currentBorder + 3) % 4];
        borderElement.style.borderLeft = borderStyle[currentBorder];
        
        currentBorder = (currentBorder + 1) % 4;
        
        setTimeout(animateBorder, 500);
    }

    animateBorder();
});

document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById('city-seal');

    let angle = 0;

    function rotateImage() {
        angle += 1;
        image.style.transform = `rotate(${angle}deg)`;
        requestAnimationFrame(rotateImage);
    }

    rotateImage();
});
