/* ========== menu icon navbar ========== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


/* ========== scroll sections active link ========== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    };
  });



  /* ========== sticky navbar ========== */
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);



    /* ========== remove menu icon navbar when click navbar link (scroll) ========== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  };
  
/* ========== swiper js ========== */ 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grubCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* ========== dark ligtht mode ========== */
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};


/* ========== scroll reveal ========== */
ScrollReveal({
  //reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });


/* ========== ReadMoreBtn ========== */
document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtn = document.getElementById("readMoreBtn");
    const aboutText = document.getElementById("aboutText");
    const webDevText = document.getElementById("webDevText");
    const wordLimit = 30; // Number of words to display initially

    function limitText(textElement, wordLimit) {
        const fullText = textElement.textContent;
        const words = fullText.split(' ');

        if (words.length > wordLimit) {
            const initialText = words.slice(0, wordLimit).join(' ');
            const moreText = words.slice(wordLimit).join(' ');

            textElement.innerHTML = `${initialText}<span id="moreText" style="display: none;"> ${moreText}</span>`;
        }
    }

    limitText(aboutText, wordLimit);
    limitText(webDevText, wordLimit);

    readMoreBtn.addEventListener("click", function(event) {
        event.preventDefault();
        const moreTextElements = document.querySelectorAll("#moreText");
        moreTextElements.forEach(element => {
            if (element.style.display === "none") {
                element.style.display = "inline";
                readMoreBtn.textContent = "Read Less";
            } else {
                element.style.display = "none";
                readMoreBtn.textContent = "Read More";
            }
        });
    });
});
