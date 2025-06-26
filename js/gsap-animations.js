document.addEventListener('DOMContentLoaded', () => {
    // Enregistrer le plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // ANIMATION D'ENTRÉE PRINCIPALE
    const entranceTL = gsap.timeline();
    
    // 1. Animation du dragon/S majestueux
    entranceTL
        .fromTo(".dragon-path", 
            { 
                strokeDashoffset: 1200,
                opacity: 0 
            },
            { 
                strokeDashoffset: 0,
                opacity: 1,
                duration: 2.5,
                ease: "power3.inOut"
            }
        )
        .to(".dragon-path", {
            strokeWidth: 3,
            filter: "drop-shadow(0 0 15px rgba(255, 190, 11, 0.9))",
            duration: 0.8
        })
        // 2. Apparition du logo WOKUP
        .to(".logo h1", {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)",
            onStart: () => {
                // Effet de particules dorées
                createGoldParticles();
            }
        }, "-=0.7")
        // 3. Apparition du sous-titre
        .to(".hero-tagline", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "circ.out"
        }, "-=0.4")
        // 4. Disparition du dragon
        .to(".dragon-path", {
            opacity: 0,
            scale: 1.2,
            duration: 1.5,
            ease: "power2.out"
        }, "+=0.5");

    // Fonction pour les particules dorées
    function createGoldParticles() {
        const colors = ['#FFBE0B', '#FFD166', '#FFEEBB'];
        const logo = document.querySelector('.logo h1');
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'gold-particle';
            document.body.appendChild(particle);
            
            gsap.set(particle, {
                x: logo.offsetLeft + logo.offsetWidth/2,
                y: logo.offsetTop + logo.offsetHeight/2,
                backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                width: gsap.utils.random(3, 8),
                height: gsap.utils.random(3, 8),
                borderRadius: '50%',
                position: 'absolute',
                zIndex: 10
            });
            
            gsap.to(particle, {
                x: gsap.utils.random(-50, 50, logo.offsetLeft + logo.offsetWidth/2),
                y: gsap.utils.random(-30, 30, logo.offsetTop + logo.offsetHeight/2),
                opacity: 0,
                duration: 1.5,
                delay: i * 0.02,
                onComplete: () => document.body.removeChild(particle)
            });
        }
    }

    // ANIMATIONS AU SCROLL
    
    // Section Split Gallery
    gsap.from(".left-blue", {
        scrollTrigger: {
            trigger: ".split-gallery",
            start: "top bottom",
            toggleActions: "play none none none"
        },
        x: -100,
        opacity: 0,
        duration: 1.2
    });

    gsap.from(".right-red", {
        scrollTrigger: {
            trigger: ".split-gallery",
            start: "top bottom",
            toggleActions: "play none none none"
        },
        x: 100,
        opacity: 0,
        duration: 1.2
    });

    gsap.from(".lightning-divider", {
        scrollTrigger: {
            trigger: ".split-gallery",
            start: "top center",
            toggleActions: "play none none none"
        },
        scaleY: 0,
        duration: 1,
        ease: "power4.out"
    });

    // Section Photos
    gsap.from(".photo-item", {
        scrollTrigger: {
            trigger: ".restaurant-photos",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)"
    });

    // Section Avis
    gsap.from(".review-card", {
        scrollTrigger: {
            trigger: ".reviews",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 30,
        stagger: 0.3,
        duration: 0.8,
        ease: "power2.out"
    });

    // Footer
    gsap.from(".map-container", {
        scrollTrigger: {
            trigger: ".evasion-footer",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        scale: 0.5,
        opacity: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)"
    });
});