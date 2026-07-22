// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Scroll-triggered fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

// Add fade-in class to animatable elements
document.querySelectorAll(
  '.project-card, .jam-card, .other-card, .about-grid, .section-title, .section-sub'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Navbar background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(15, 15, 19, 0.95)';
  } else {
    navbar.style.background = 'rgba(15, 15, 19, 0.85)';
  }
});
