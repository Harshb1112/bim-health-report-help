// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.step-card, .feature-card, .faq-item, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Fetch and display version info
fetch('/api/version')
    .then(response => response.json())
    .then(data => {
        console.log('Plugin Version:', data.version);
        console.log('Supported Revit Versions:', data.supportedRevitVersions);
    })
    .catch(error => console.error('Error fetching version:', error));

// Add current year to footer
const currentYear = new Date().getFullYear();
document.querySelector('.footer p').textContent = 
    `© ${currentYear} BIMBOSS CONSULTANTS. All rights reserved.`;
