document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const slideWrapper = document.querySelector('.slide-wrapper');
    const totalSlides = slides.length;

    function showSlide(index) {
        slideWrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    function goToNextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function goToPreviousSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    document.querySelector('.next').addEventListener('click', goToNextSlide);
    document.querySelector('.prev').addEventListener('click', goToPreviousSlide);

    // Initialize the slider
    showSlide(currentSlide);

    // Set up automatic sliding every 4 seconds
    setInterval(goToNextSlide, 4000);
});
