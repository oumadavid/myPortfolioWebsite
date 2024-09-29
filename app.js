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
//Function to navigate to the content page
function navigateToContentPage(contentId) {
  //Save the content ID in local page
  localStorage.setItem('contentId', contentId);
  // navigate to the content page
  window.location.href = 'content.html';
}

// function to load the content based on the content ID
function loadContent() {
  // Retrieve the content ID from local storage
  const contentId = localStorage.getItem('contentId');
  if (!contentId) {
    document.getElementById('content-text').innerText = 'Content not found.'
    return;
  }

  // Mock function to simulate fetching content based on ID
  function getContentById(id) {
    //Mock content data
    const content = {
      1: 'This is the full content for item 1.'
    };
    return content[id] || 'Content not found';
  }

  // Function to go back to the main page
  function goBack() {
    if (document.referrer.includes(window.location.host)) {
      // Go back if the referrer is from the same website
      window.history.back();
    } else {
      // Redirect to the main page if no history to go back to
      window.location.href = 'index.html';
    }
  }

  // Load the content when the content page is loaded
  if (window.location.pathname.endsWith('content.html')) {
    window.onload = loadContent;
  }
}

// Making the portfolio external icon responsive

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.portfolio-box').addEventListener('click', function(event) {
      if (event.target.tagName.toLowerCase() === 'i') {
          const url = event.target.getAttribute('data-url');
          if (url) {
              window.location.href = url;
          }
      }
  });
});

// contact section
document.getElementById('contactForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  const formData = new FormData(this);
  
  try {
    const response = await fetch('https://oumadavid.github.io/myPortfolioWebsite/send-email', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert('Failed to send message.');
    }
  } catch (error) {
    alert('An error occurred: ' + error);
  }
});


