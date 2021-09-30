document.addEventListener('DOMContentLoaded', () => {
  let slidePosition = 0;
  const slides = document.getElementsByClassName('carousel-item');
  const totalSlides = slides.length;
  console.log("js loaded /n")
  console.log(document.getElementById('carousel-button-next'));
  document.getElementById('carousel-button-next').addEventListener("click", function () {
    console.log("next button clicked");
    moveToNextSlide();
  });

  document.
    getElementById('carousel-button-prev').addEventListener("click", function () {
      console.log("prev button clicked");
      moveToPrevSlide();
    });

  function updateSlidePosition() {
    for (let slide of slides) {
      slide.classList.remove('carousel-item-visible');
      slide.classList.add('carousel-item-hidden');
    }
    
    slides[slidePosition].classList.remove('carousel-item-hidden');
    slides[slidePosition].classList.add('carousel-item-visible');
    
  }

  function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {
      slidePosition++;
    }

    updateSlidePosition();
  }

  function moveToPrevSlide() {
    if (slidePosition === 0) {
      slidePosition = totalSlides - 1;
    } else {
      slidePosition--;
    }

    updateSlidePosition();
  }
})