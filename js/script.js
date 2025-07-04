document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
        if (document.body.classList.contains('nav-open')) {
            navLinks.style.transform = 'translateY(0)';
        } else {
            navLinks.style.transform = 'translateY(-150%)';
        }
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-button').forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
            navLinks.style.transform = 'translateY(-150%)';
        });
    });

    // Animation d'entrée
    setTimeout(() => {
        document.querySelector('.main-logo').classList.add('animate-logo');
        document.querySelector('.slogan').classList.add('animate-slogan');
    }, 500);

    // Animation au scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.specialty-card, .fondue-card, .formula-card');
        
        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.75) {
                el.style.opacity = '1';
                el.style.transform = el.classList.contains('specialty-card') ? 
                    el.style.transform.replace('translateY(50px)', 'translateY(0)') : 'translateY(0)';
            }
        });
    };

    // Initialisation des animations
    document.querySelectorAll('.specialty-card, .fondue-card, .formula-card').forEach(el => {
        el.style.opacity = '0';
        if (el.classList.contains('specialty-card')) {
            const currentTransform = window.getComputedStyle(el).getPropertyValue('transform');
            el.style.transform = currentTransform + ' translateY(50px)';
        } else {
            el.style.transform = 'translateY(50px)';
        }
        el.style.transition = 'all 0.8s ease-out';
    });

    // Écouteur d'événement pour le scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Effet de zoom au survol des images
    document.querySelectorAll('.dish-frame img, .fondue-image, .formula-image').forEach(img => {
        img.addEventListener('mousemove', (e) => {
            const rect = e.target.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width * 100;
            const y = (e.clientY - rect.top) / rect.height * 100;
            e.target.style.transformOrigin = `${x}% ${y}%`;
        });
    });

    // Navigation fluide
    document.querySelectorAll('.nav-button[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Comportement de la navbar au scroll
    const header = document.querySelector('.header-nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            header.style.transform = 'translateY(0)';
            header.style.boxShadow = 'none';
        } else if (currentScroll > lastScroll) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
        }
        lastScroll = currentScroll;
    });

    // Effet de survol sur les cartes menu
    document.querySelectorAll('.formula-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Animation des images de formule au survol
    document.querySelectorAll('.formula-image').forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.05)';
        });
        
        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
        });
    });
});