// ========== Counter Animation ==========
function animateCounter(element) {
  const target = parseFloat(element.getAttribute('data-count'));
  const hasDecimal = element.hasAttribute('data-dec');
  const duration = 2000;
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = hasDecimal ? current.toFixed(1) : Math.floor(current);
  }, 16);
}

// ========== Scroll Reveal Animation ==========
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('active');

      // Trigger counter animation when stat sections become visible
      if (!element.dataset.counted) {
        const counters = element.querySelectorAll('[data-count]');
        counters.forEach(counter => animateCounter(counter));
        element.dataset.counted = 'true';
      }
    }
  });
}

// ========== Navigation Active State ==========
function updateNavActive() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// ========== Initialize ==========
document.addEventListener('DOMContentLoaded', () => {
  // Initial reveal check
  revealOnScroll();

  // Scroll event listener
  window.addEventListener('scroll', () => {
    revealOnScroll();
    updateNavActive();
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      e.preventDefault();
      const target = document.querySelector(targetId);

      if (target) {
        const offset = 80;
        const targetPosition = target.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
