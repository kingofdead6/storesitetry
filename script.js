

window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (window.scrollY > 100) {
        hero.classList.add('shrink');
    } else {
        hero.classList.remove('shrink');
    }
});
// script.js

window.addEventListener('scroll', function() {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    const scrollPosition = window.pageYOffset;

    // Adjust the speed of movement
    let translateY = scrollPosition * 0.5;

    // Get the hero section's height and the hero image's bottom position
    const heroHeight = document.querySelector('.hero').offsetHeight;
    const heroImageBottom = heroImage.offsetTop + heroImage.offsetHeight;

    // Limit the movement so it doesn't surpass the bottom of the hero image
    translateY = Math.min(translateY, heroImageBottom - heroHeight);

    // Apply the transform
    heroContent.style.transform = 'translateY(' + translateY + 'px)';
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetTop = targetElement.offsetTop;
                const scrollTo = targetTop - (window.innerHeight / 2) + (targetElement.offsetHeight / 2);
                window.scrollTo({
                    top: scrollTo,
                    behavior: 'smooth'
                });
            }
        });
    });
});
