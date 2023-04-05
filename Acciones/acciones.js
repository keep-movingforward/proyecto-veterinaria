window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('scroll');
    } else {
      nav.classList.remove('scroll');
    }
  });

/********************************* Carrusel */
$(document).ready(function() {
    var slideIndex = 0;
    showSlides();
    
    function showSlides() {
      var i;
      var slides = $(".carousel-slide").children();
      var dots = $(".carousel-dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 3000); // Timer Here
    }
    
    $(".carousel-next").click(function() {
      var slides = $(".carousel-slide").children();
      var dots = $(".carousel-dot");
      slides[slideIndex-1].style.display = "none";
      dots[slideIndex-1].className = dots[slideIndex-1].className.replace(" active", "");
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    });
    
    $(".carousel-prev").click(function() {
      var slides = $(".carousel-slide").children();
      var dots = $(".carousel-dot");
      slides[slideIndex-1].style.display = "none";
      dots[slideIndex-1].className = dots[slideIndex-1].className.replace(" active", "");
      slideIndex--;
      if (slideIndex < 1) {
        slideIndex = slides.length;
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    });
  });
  

  