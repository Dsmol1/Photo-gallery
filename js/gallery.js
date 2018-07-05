  // Variables
  let sliderImages = document.querySelectorAll('.slide');
  let arrowLeft = document.querySelector('#arrow-container-left');
  let arrowRight = document.querySelector('#arrow-container-right');
  let current = 0;

  // Clear all images
  function reset(){
    for(let i = 0; i < sliderImages.length; i++){
      sliderImages[i].style.display = "none";
    }
  };

  // Initialize slider
  function startSlide(){
    reset();
    sliderImages[0].style = "display: block; animation: slide-right 0.7s ease-out";
  }

  // Show previous
  function slideLeft(){
    reset();
    sliderImages[current - 1].style = "display: block; animation: slide-left 0.7s ease-out";
    current--;
  }

  // Show next
  function slideRight(){
    reset();
    sliderImages[current + 1].style = "display: block; animation: slide-right 0.7s ease-out";
    current++;
  }

  // Left arrow click
  arrowLeft.addEventListener("click", function(){
    if(current === 0){
      current = sliderImages.length;
    }
    slideLeft();
  });

  // Right arrow click
  arrowRight.addEventListener("click", function(){
    if(current === sliderImages.length -1){
      current = -1;
    }
    slideRight();
  });

  startSlide();
