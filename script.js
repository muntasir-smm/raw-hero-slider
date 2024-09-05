let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Initialize the first slide
showSlide(currentSlide);

// Function to show the current slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.classList.add(i === index ? 'active' : 'right');
  });
}

// Go to the next slide
function goToNextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Go to the previous slide
function goToPreviousSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Automatically change slide every 4 seconds
setInterval(goToNextSlide, 4000);
