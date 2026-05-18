const observerOptions = {
    threshold: 0.05 // Lower threshold to trigger sooner
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target); // Stop observing once revealed
        }
    });
}, observerOptions);

document.querySelectorAll('section, .artist-card, .artist-card-premium, .portfolio-item').forEach(el => {
    el.classList.add('reveal-init');
    observer.observe(el);
});

// Optimized Parallax Effect
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.scrollY;
            document.querySelectorAll('.editorial-image img').forEach(img => {
                const speed = 0.1;
                img.style.transform = `translateY(${scrolled * speed}px) scale(1.1)`;
            });
            ticking = false;
        });
        ticking = true;
    }
});

// Duplicating marquee content for seamless loop
const marquee = document.querySelector('.marquee-content');
if (marquee) {
    marquee.innerHTML += marquee.innerHTML;
}
// Lightbox Logic
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const closeLightbox = document.querySelector('.close-lightbox');

if (lightbox) {
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const video = item.querySelector('video');

            lightboxContent.innerHTML = '';
            if (img) {
                const clone = img.cloneNode();
                lightboxContent.appendChild(clone);
            } else if (video) {
                const clone = video.cloneNode(true);
                clone.controls = true;
                lightboxContent.appendChild(clone);
            }
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    const closeActions = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        lightboxContent.innerHTML = '';
    };

    if (closeLightbox) closeLightbox.addEventListener('click', closeActions);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeActions();
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeActions();
    });
}
// Hero Entrance Animation
window.addEventListener('DOMContentLoaded', () => {
    // Portfolio Filtering System
    const filterButtons = document.querySelectorAll('.filter-btns button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterButtons.length > 0 && portfolioItems.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = btn.getAttribute('data-filter');

                // UI Update
                filterButtons.forEach(b => b.classList.remove('btn-primary'));
                btn.classList.add('btn-primary');

                // Logic Update
                portfolioItems.forEach(item => {
                    if (category === 'all' || item.classList.contains(category)) {
                        item.style.display = 'block';
                        item.style.opacity = '1';
                    } else {
                        item.style.display = 'none';
                        item.style.opacity = '0';
                    }
                });
            });
        });
    }

    // Hero Entrance Animation
    const studioHero = document.querySelector('.hero h1');
    if (studioHero) {
        studioHero.style.opacity = '0';
        studioHero.style.transform = 'translateY(30px)';

        setTimeout(() => {
            studioHero.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
            studioHero.style.opacity = '1';
            studioHero.style.transform = 'translateY(0)';
        }, 100);
    }
});
// Booking Page Logic
window.addEventListener('DOMContentLoaded', () => {
    // 1. Handle Artist Pre-selection from Query Param
    const urlParams = new URLSearchParams(window.location.search);
    const artistParam = urlParams.get('artist');
    const artistSelect = document.querySelector('select');

    if (artistParam && artistSelect) {
        // Map param to select value
        const artistMap = {
            'chris': 'Chris Young',
            'mr-inkcredible': 'Mr. Inkcredible',
            'sebastien': 'Sebastien Crooks',
            'tessa': 'Tessa'
        };

        const artistName = artistMap[artistParam.toLowerCase()];
        if (artistName) {
            for (let i = 0; i < artistSelect.options.length; i++) {
                if (artistSelect.options[i].text === artistName) {
                    artistSelect.selectedIndex = i;
                    break;
                }
            }
        }
    }

    // 2. Handle Custom File Input Click
    const fileWrapper = document.querySelector('.file-input-wrapper');
    const fileInput = document.getElementById('reference');
    const fileText = document.getElementById('file-text');

    if (fileWrapper && fileInput) {
        fileWrapper.addEventListener('click', () => fileInput.click());

        fileInput.addEventListener('change', () => {
            const count = fileInput.files.length;
            if (fileText) {
                fileText.textContent = count > 0
                    ? (count === 1 ? fileInput.files[0].name : `${count} files selected`)
                    : 'Drop images here or click to upload';
                fileWrapper.style.borderColor = 'var(--accent-gold)';
            }
        });
    }

    // 3. AJAX Submission Handler
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = bookingForm.querySelector('.submit-btn');
            const originalText = btn.textContent;

            btn.disabled = true;
            btn.textContent = 'Sending...';

            const formData = new FormData(bookingForm);
            formData.append('form-name', 'booking');

            try {
                await fetch("/", {
                    method: "POST",
                    body: formData
                });

                // Show Success Message
                bookingForm.style.transition = 'opacity 0.5s ease';
                bookingForm.style.opacity = '0';

                setTimeout(() => {
                    bookingForm.innerHTML = `
                        <div class="success-message reveal" style="text-align: center; padding: 3rem 1rem;">
                            <div class="success-icon" style="font-size: 3rem; color: var(--accent-gold); margin-bottom: 1.5rem;">✓</div>
                            <h2 class="text-gold" style="font-family: var(--font-display); margin-bottom: 1rem;">Request Received</h2>
                            <p style="opacity: 0.8; max-width: 400px; margin: 0 auto; line-height: 1.6;">
                                Thank you! Your consultation request has been sent to our team. 
                                We'll review your vision and get back to you within 24-48 hours.
                            </p>
                            <button onclick="window.location.reload()" class="btn" style="margin-top: 2rem; font-size: 0.8rem;">Send Another Request</button>
                        </div>
                    `;
                    bookingForm.style.opacity = '1';
                    bookingForm.classList.add('submission-success');
                    window.scrollTo({ top: bookingForm.offsetTop - 150, behavior: 'smooth' });
                }, 500);

            } catch (error) {
                console.error("Submission error:", error);
                btn.disabled = false;
                btn.textContent = 'Error - Try Again';
                alert("There was a problem sending your request. Please try again or contact us directly.");
            }
        });
    }
});
// Mobile Menu Toggle Logic
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}
