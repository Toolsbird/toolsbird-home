// Smooth scrolling for navigation links
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

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe tool cards for staggered animation
document.querySelectorAll('.tool-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Add hover effect sound (optional - can be enabled with audio files)
const toolCards = document.querySelectorAll('.tool-card, .tool-card-preview');
toolCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// CTA Button click handler
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const toolsSection = document.querySelector('#tools');
        if (toolsSection) {
            toolsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Add parallax effect to hero background
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Tool card click handlers (can be customized to link to actual tools)
document.querySelectorAll('.tool-card, .tool-card-preview').forEach(card => {
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('tool-card-link')) {
            const link = card.querySelector('.tool-card-link');
            if (link) {
                // You can customize this to navigate to actual tool pages
                console.log('Tool clicked:', card.querySelector('h3').textContent);
            }
        }
    });
});

// Add dynamic gradient animation to CTA button
const ctaBtn = document.querySelector('.cta-button');
if (ctaBtn) {
    ctaBtn.addEventListener('mousemove', (e) => {
        const rect = ctaBtn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ctaBtn.style.setProperty('--mouse-x', `${x}px`);
        ctaBtn.style.setProperty('--mouse-y', `${y}px`);
    });
}

// Responsive navigation toggle for mobile (if needed in future)
function initMobileNav() {
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');
    
    // Add mobile menu button if screen is small
    if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-btn')) {
        const menuBtn = document.createElement('button');
        menuBtn.className = 'mobile-menu-btn';
        menuBtn.innerHTML = '☰';
        menuBtn.style.cssText = `
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--primary-orange);
            cursor: pointer;
        `;
        
        header.querySelector('.header-content').appendChild(menuBtn);
        
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('mobile-active');
        });
    }
}

// Initialize on load and resize
window.addEventListener('load', initMobileNav);
window.addEventListener('resize', initMobileNav);

// Add easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedUpdateNav = debounce(updateActiveNav, 100);
window.addEventListener('scroll', debouncedUpdateNav);

console.log('🚀 ToolsBird - Simple tools, Quality results');
