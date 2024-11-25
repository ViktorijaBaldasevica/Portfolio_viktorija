document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const button = document.querySelector('.contact-btn');

button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
    button.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
});

button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
    button.style.boxShadow = 'none';
});

