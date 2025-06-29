document.addEventListener('DOMContentLoaded', () => {
    // Animation d'entrée du logo et slogan
    setTimeout(() => {
        document.querySelector('.main-logo').classList.add('animate-logo');
        document.querySelector('.slogan').classList.add('animate-slogan');
    }, 500);

    // Animation des éléments au scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.specialty-card, .fondue-card, .menu-formula, .menu-photo');
        
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

    // Initial state
    document.querySelectorAll('.specialty-card, .fondue-card, .menu-formula, .menu-photo').forEach(el => {
        el.style.opacity = '0';
        if (el.classList.contains('specialty-card')) {
            const currentTransform = window.getComputedStyle(el).getPropertyValue('transform');
            el.style.transform = currentTransform + ' translateY(50px)';
        } else {
            el.style.transform = 'translateY(50px)';
        }
        el.style.transition = 'all 0.8s ease-out';
    });

    // Écouteur de scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Pour les éléments déjà visibles

    // Effet de zoom sur les images au survol
    document.querySelectorAll('.dish-frame img, .fondue-image, .menu-photo img').forEach(img => {
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

    // Animation pour le header au scroll
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
});