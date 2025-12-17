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

// Falling Leaves Animation
function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    
    // Random properties
    const left = Math.random() * 100; // 0-100vw
    const duration = Math.random() * 5 + 5; // 5-10s
    const delay = Math.random() * 5; // 0-5s
    const size = Math.random() * 10 + 15; // 15-25px
    const colors = [
        '#d97706', // amber
        '#b45309', // dark amber
        '#cdb4db', // purple-ish (from theme)
        '#ffc8dd', // pink-ish
        '#38bdf8', // accent primary
        '#818cf8'  // accent secondary
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const swayAmount = (Math.random() - 0.5) * 200 + 'px'; // -100px to 100px
    
    leaf.style.left = `${left}vw`;
    leaf.style.animationDuration = `${duration}s`;
    leaf.style.animationDelay = `${delay}s`;
    leaf.style.width = `${size}px`;
    leaf.style.height = `${size}px`;
    leaf.style.background = color;
    leaf.style.setProperty('--sway-amount', swayAmount);
    
    document.body.appendChild(leaf);
    
    // Cleanup
    setTimeout(() => {
        leaf.remove();
    }, (duration + delay) * 1000);
}

// Create leaves periodically
setInterval(createLeaf, 500);

// Initial batch
for(let i=0; i<10; i++) {
    createLeaf();
}
