document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');


    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = 'block'; // Mostrar el slide actual
        } else {
          slide.style.display = 'none'; // Ocultar los demás slides
        }
        
      });
    }
  
    // Mostrar el primer slide al cargar la página
    showSlide(currentIndex);
  
    prevBtn.addEventListener('click', function() {
      currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
      showSlide(currentIndex);
    });
  
    nextBtn.addEventListener('click', function() {
      currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
      showSlide(currentIndex);
    });
  });

  
  