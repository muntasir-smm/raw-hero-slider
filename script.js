let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideWrapper = document.querySelector('.slide-wrapper');
const totalSlides = slides.length;

// Function to show the current slide
function showSlide(index) {
    slideWrapper.style.transform = `translateX(-${index * 100}%)`;
}

// Function to move to the next slide
function goToNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Function to move to the previous slide
function goToPreviousSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Initialize the slider
showSlide(currentSlide);

// Set up automatic sliding every 4 seconds
setInterval(goToNextSlide, 4000);
