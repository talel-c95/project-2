 // Menu toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', function() {
            navLinks.classList.toggle('show');
});



const productContainer = document.querySelector('.product-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let scrollAmount = 0;
const scrollPerClick = 220; // Width of one product-card + margin

nextButton.addEventListener('click', () => {
    productContainer.scrollTo({
        left: (scrollAmount += scrollPerClick),
        behavior: 'smooth'
    });
    if (scrollAmount >= productContainer.scrollWidth - productContainer.clientWidth) {
        scrollAmount = 0;
    }
});

prevButton.addEventListener('click', () => {
    productContainer.scrollTo({
        left: (scrollAmount -= scrollPerClick),
        behavior: 'smooth'
    });
    if (scrollAmount < 0) {
        scrollAmount = productContainer.scrollWidth - productContainer.clientWidth;
    }
});

//Scroll Reveal

ScrollReveal().reveal('.hero-content h1', {
  duration: 3000,
  distance: '1000px'
});

ScrollReveal().reveal('.hero-content p', {
  duration: 4000,
  distance: '1000px',
  origin: 'bottom'
});

ScrollReveal().reveal('.hero-image img', {
  duration: 4000,
  distance: '1000px',
  origin: 'right'
});

ScrollReveal().reveal('.hero-image .hero1', {
  duration: 4000,
  distance: '1000px',
  origin: 'bottom'
});

ScrollReveal().reveal('.skin-glow-section h2', {
  duration: 2000,
  distance: '200px',
  origin: 'bottom',
  reset: true
});

ScrollReveal().reveal('.card-container', {
  duration: 3000,
  distance: '200px',
  origin: 'bottom',
  reset: true
});

ScrollReveal().reveal('.benefits-content', {
  duration: 3000,
  distance: '200px',
  origin: 'bottom',
  reset: true
});

ScrollReveal().reveal('.benefit-list li', {
  duration: 3000,
  distance: '200px',
  origin: 'left',
  reset: true
});

ScrollReveal().reveal('.benefit-image', {
  duration: 3000,
  distance: '200px',
  origin: 'right',
  reset: true
});

ScrollReveal().reveal('.product-section h1', {
  duration: 2000,
  distance: '200px',
  origin: 'bottom',
  reset: true
});

ScrollReveal().reveal('.article-section h1', {
  duration: 2000,
  distance: '200px',
  origin: 'bottom',
  reset: true
});

ScrollReveal().reveal('.footer-section', {
  duration: 2000,
  distance: '200px',
  origin: 'bottom',
  reset: true
});
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}