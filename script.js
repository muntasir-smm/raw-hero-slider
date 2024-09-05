document.addEventListener("DOMContentLoaded", function() {
  let currentSlide = 0;
  const slideWrapper = document.querySelector('.slide-wrapper');
  const navButtons = document.querySelectorAll('.nav-button');

  // Fetch slide data from JSON
  fetch('slidesData.json')
    .then(response => response.json())
    .then(data => {
      const slides = data;
      const totalSlides = slides.length;
      
      // Generate slides
      slides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.classList.add('slide');
        slideElement.innerHTML = `
          <img src="${slide.src}" alt="Slide ${index + 1}">
          <div class="caption">
            <h2>${slide.title}</h2>
            <p>${slide.description}</p>
          </div>
        `;
        slideWrapper.appendChild(slideElement);
      });

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

      // Attach event listeners to navigation buttons
      navButtons.forEach(button => {
        if (button.classList.contains('prev')) {
          button.addEventListener('click', goToPreviousSlide);
        } else if (button.classList.contains('next')) {
          button.addEventListener('click', goToNextSlide);
        }
      });
    })
    .catch(error => console.error('Error fetching slide data:', error));
});
