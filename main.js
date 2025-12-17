// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const currentTheme = body.classList.contains('light-theme') ? 'light-theme' : '';
    localStorage.setItem('theme', currentTheme);
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Animations (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .section-title, .about-text, .contact').forEach(el => {
    el.classList.add('fade-in-section');
    observer.observe(el);
});
