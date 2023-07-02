window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('scroll');
    } else {
      nav.classList.remove('scroll');
    }
  });


const logo = document.querySelector('.logo-nav');
const menu = document.querySelector('.menu');

logo.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
});


/********************************* Carrusel */
document.addEventListener("DOMContentLoaded", function() {
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.querySelector(".carousel-slide").children;
    var dots = document.querySelectorAll(".carousel-dot");
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
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000);
  }

  document.querySelector(".carousel-next").addEventListener("click", function() {
    var slides = document.querySelector(".carousel-slide").children;
    var dots = document.querySelectorAll(".carousel-dot");
    slides[slideIndex - 1].style.display = "none";
    dots[slideIndex - 1].className = dots[slideIndex - 1].className.replace(" active", "");
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  });

  document.querySelector(".carousel-prev").addEventListener("click", function() {
    var slides = document.querySelector(".carousel-slide").children;
    var dots = document.querySelectorAll(".carousel-dot");
    slides[slideIndex - 1].style.display = "none";
    dots[slideIndex - 1].className = dots[slideIndex - 1].className.replace(" active", "");
    slideIndex--;
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  });
});

  
/*-------Animación Entrada--------*/

const elementAnimation = [
  { transform: "translateY(-100px)", opacity: 0 },
  { transform: "translateY(0)", opacity: 1 },
];

const elementTiming = {
  duration: 700,
  iterations: 1,
};

const navElements = document.querySelectorAll("nav *");
const titleElement = document.querySelector(".hero-text h1");

[...navElements, titleElement].forEach((element) => {
  element.animate(elementAnimation, elementTiming);
});


//////

function setVideoSrc() {
  var video = document.querySelector("#video");
  if (window.innerWidth < 600) {
    video.src =
      "https://www.youtube.com/embed/tIt82sUYvho?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&playlist=tIt82sUYvho";
  } else {
    video.src =
      "https://www.youtube.com/embed/C---wF7YKtI?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&playlist=C---wF7YKtI";
  }
}

window.addEventListener("resize", setVideoSrc);
setVideoSrc();
