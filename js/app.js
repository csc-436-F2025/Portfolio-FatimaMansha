/* ==============================================
   PROGRESS BARS ANIMATION
   Fills progress bars when they come into view
============================================== */
const progressBars = document.querySelectorAll('.progress');

function fillProgressBars() {
  progressBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      // Fill bar to its data-progress value
      bar.style.width = bar.dataset.progress;
    } else {
      // Reset bar when not in view
      bar.style.width = '0';
    }
  });
}

/* ==============================================
   SEQUENTIAL TYPING ANIMATION
   For home section headings (H1 & H2)
============================================== */
const texts = {
  h1: "Hello! I'm Fatima Mansha.",
  h2: "A Bit About Me"
};

// Target elements
const homeH1 = document.getElementById('homeH1');
const homeH2 = document.getElementById('homeH2');

// Clear text for typing effect
homeH1.innerHTML = '';
homeH2.innerHTML = '';

/**
 * typeWriter - types out text character by character
 * @param {HTMLElement} element - The element to type in
 * @param {string} text - Text to type
 * @param {Function} callback - Function to call after typing completes
 */
function typeWriter(element, text, callback) {
  let index = 0;

  function type() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 50); // typing speed (ms)
    } else if (callback) {
      callback(); // call next function when done
    }
  }

  type();
}

// Start typing animation on window load
window.addEventListener('load', () => {
  typeWriter(homeH1, texts.h1, () => {
    typeWriter(homeH2, texts.h2);
  });
});

/* ==============================================
   BACK TO TOP BUTTON
   Show button on scroll and scroll smoothly to top
============================================== */
const backToTopBtn = document.getElementById("backToTop");

// Show or hide button on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = "inline-block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Scroll smoothly to top when button is clicked
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* ==============================================
   EVENT LISTENERS
============================================== */
// Animate progress bars on scroll
window.addEventListener('scroll', fillProgressBars);
