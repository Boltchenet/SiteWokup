document.addEventListener('DOMContentLoaded', () => {
    const sPath = document.querySelector('.s-path');
    const logo = document.querySelector('.logo h1');
    const buttons = document.querySelectorAll('.cta-btn');
    const specialtyCards = document.querySelectorAll('.specialty-card');

    // Animation principale
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(sPath, {
        strokeDashoffset: 500,
        duration: 1.5
    })
    .from(logo, {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: "back.out(1.7)"
    }, "-=0.5")
    .from('.content > *', {
        opacity: 0,
        y: 10,
        stagger: 0.2,
        duration: 0.8
    }, "-=0.3");

    // Hover boutons
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                backgroundColor: 'var(--gold)',
                color: 'var(--black)',
                scale: 1.05,
                duration: 0.2
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                backgroundColor: 'transparent',
                color: 'var(--white)',
                scale: 1,
                duration: 0.2
            });
        });
    });

    // Animation des cartes spécialités
    specialtyCards.forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: i * 0.1
        });
    });

    // Animation de la section expérience
    gsap.from('.experience-steps', {
        scrollTrigger: {
            trigger: '.experience',
            start: "top 70%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1
    });

    // Animation des fun facts
    gsap.from('.fun-facts li', {
        scrollTrigger: {
            trigger: '.fun-facts',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        x: -20,
        stagger: 0.2,
        duration: 0.5
    });
});