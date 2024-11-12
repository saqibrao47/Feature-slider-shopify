const sliderTrack = document.querySelector('.slider-track');
const slides = Array.from(document.querySelectorAll('.slide'));
const slideWidth = slides[0].offsetWidth;
let index = 0;

function autoSlide() {
  index++;
  if (index === slides.length) {
    index = 0; // Reset to start when reaching the end
  }
  sliderTrack.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Set the interval for auto sliding (e.g., every 3 seconds)
setInterval(autoSlide, 3000);

// Adjust the slide width dynamically on window resize
window.addEventListener('resize', () => {
  const currentSlideWidth = slides[0].offsetWidth;
  sliderTrack.style.transform = `translateX(-${index * currentSlideWidth}px)`;
});


