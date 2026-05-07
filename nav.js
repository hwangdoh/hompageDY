// Sets the active nav link based on the current page
function initNav(activePage) {
  const links = document.querySelectorAll('.global-nav__links a, .mobile-nav a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(activePage)) {
      link.classList.add('active');
    }
  });
}

function toggleMenu() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('mobileNav');
  btn.classList.toggle('open');
  nav.classList.toggle('open');
}

// Close mobile menu on outside click
document.addEventListener('click', function(e) {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('mobileNav');
  if (nav && nav.classList.contains('open')) {
    if (!nav.contains(e.target) && !btn.contains(e.target)) {
      btn.classList.remove('open');
      nav.classList.remove('open');
    }
  }
});

// Scroll fade-up animation
function initFadeUp() {
  const els = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initFadeUp);
