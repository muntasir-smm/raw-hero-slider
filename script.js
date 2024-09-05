document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    let slides = [];
    let slideWrapper = document.querySelector('.slide-wrapper');
    let indicatorsContainer = document.querySelector('.indicators');

    // Fetch slide data
    fetch('slidesData.json')
        .then(response => response.json())
        .then(data => {
            slides = data;
            loadSlides();
            setupIndicators();
            showSlide(currentSlide);
        });

    // Load slides into the slider
    function loadSlides() {
        slideWrapper.innerHTML = slides.map((slide) => `
            <div class="slide">
                <img src="${slide.src}" alt="${slide.title}">
                <div class="caption">
                    <h2>${slide.title}</h2>
                    <p>${slide.description}</p>
                </div>
            </div>
        `).join('');
    }

    // Setup indicators with the current slide number
    function setupIndicators() {
        indicatorsContainer.innerHTML = `
            <div class="indicator ${currentSlide === 0 ? 'active' : ''}">
                ${currentSlide + 1} / ${slides.length}
            </div>
        `;
    }

    // Show slide by index
    function showSlide(index) {
        slideWrapper.style.transform = `translateX(-${index * 100}%)`;
        updateIndicators(index);
    }

    // Update indicators
    function updateIndicators(index) {
        currentSlide = index;
        setupIndicators();
    }

    // Move to the next slide
    window.goToNextSlide = function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Move to the previous slide
    window.goToPreviousSlide = function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Move to a specific slide
    window.goToSlide = function(index) {
        currentSlide = index;
        showSlide(currentSlide);
    }

    // Auto-slide every 4 seconds
    setInterval(goToNextSlide, 4000);
});
