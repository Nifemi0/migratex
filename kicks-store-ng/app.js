document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor Follower
    const follower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    });

    // Hover effect for links and grid items
    const hoverables = document.querySelectorAll('a, .grid-item, .btn-minimal');
    hoverables.forEach(item => {
        item.addEventListener('mouseenter', () => {
            follower.style.transform = 'translate(-50%, -50%) scale(4)';
            follower.style.background = 'rgba(255,255,255,0.1)';
            follower.style.border = '1px solid white';
            follower.style.mixBlendMode = 'normal';
        });
        item.addEventListener('mouseleave', () => {
            follower.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.background = 'white';
            follower.style.border = 'none';
            follower.style.mixBlendMode = 'difference';
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.grid-item, .about-text, .about-image').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Parallax effect for hero text
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBg = document.querySelector('.hero-bg-text');
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Mobile Menu Toggle
    const burger = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
