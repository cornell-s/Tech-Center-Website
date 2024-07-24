document.addEventListener("DOMContentLoaded", function() {
    const borderElement = document.querySelector('.animated-border');

    let borderStyle = [
        '2px solid #ea1d7c',
        '2px solid #ffc500',
        '2px solid #0cd1ca',
        '2px solid #783dbd'
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

document.addEventListener('DOMContentLoaded', function() {
    const bouncingLetters = document.querySelector('.bouncing-letters');
    const text = bouncingLetters.textContent;
    bouncingLetters.innerHTML = '';
  
    // Split the text into words
    const words = text.split(' ');
  
    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'word';
      wordSpan.style.setProperty('--i', wordIndex);
  
      // Split each word into letters
      word.split('').forEach((letter, letterIndex) => {
        const letterSpan = document.createElement('span');
        letterSpan.textContent = letter;
        letterSpan.style.setProperty('--i', letterIndex + (wordIndex * 0.1)); // Add delay for letters within words
        wordSpan.appendChild(letterSpan);
      });
  
      bouncingLetters.appendChild(wordSpan);
    });
  });
  
  
  
