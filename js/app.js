const progressBars = document.querySelectorAll('.progress');

function fillProgressBars() {
  progressBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50) {
      bar.style.width = bar.dataset.progress;
    } else {
      bar.style.width = '0';
    }
  });
}
// Sequential Typing Animation for H1 & H2 only
const texts = {
  h1: "Hello! I'm Fatima Mansha.",
  h2: "A Bit About Me"
};

// Target elements
const homeH1 = document.getElementById('homeH1');
const homeH2 = document.getElementById('homeH2');

// Clear text first for typing effect
homeH1.innerHTML = '';
homeH2.innerHTML = '';

// Typing function
function typeWriter(element, text, callback) {
  let index = 0;
  function type() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 50); // typing speed
    } else if (callback) {
      callback();
    }
  }
  type();
}

// Start typing sequentially
window.addEventListener('load', () => {
  typeWriter(homeH1, texts.h1, () => {
    typeWriter(homeH2, texts.h2);
  });
});

window.addEventListener('scroll', fillProgressBars);
