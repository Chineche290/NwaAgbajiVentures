// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Scroll-triggered fade-in animation
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.service, .hero-content, .image-carousel img').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});
