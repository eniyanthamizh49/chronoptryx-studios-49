// Simple Router and Navigation System
class SimpleRouter {
    constructor() {
        this.routes = new Map();
        this.currentPage = 'home';
        this.init();
    }

    init() {
        // Set up navigation event listeners
        this.setupNavigation();
        
        // Handle initial route
        this.handleRoute();
        
        // Listen for hash changes
        window.addEventListener('hashchange', () => this.handleRoute());
        
        // Listen for popstate (back/forward buttons)
        window.addEventListener('popstate', () => this.handleRoute());
    }

    setupNavigation() {
        // Desktop navigation
        const desktopNavLinks = document.querySelectorAll('.nav-link');
        desktopNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                this.navigateTo(page);
            });
        });

        // Mobile navigation
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                this.navigateTo(page);
                this.closeMobileMenu();
            });
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileNav = document.getElementById('mobileNav');
        
        mobileMenuBtn.addEventListener('click', () => {
            this.toggleMobileMenu();
        });
    }

    handleRoute() {
        const hash = window.location.hash.slice(1);
        const page = hash || 'home';
        this.showPage(page);
    }

    navigateTo(page) {
        window.location.hash = page;
        this.showPage(page);
    }

    showPage(pageId) {
        // Hide all pages
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));

        // Show selected page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            this.currentPage = pageId;
        } else {
            // Default to home if page not found
            document.getElementById('home').classList.add('active');
            this.currentPage = 'home';
        }

        // Update navigation active states
        this.updateActiveNavigation(pageId);
        
        // Scroll to top
        window.scrollTo(0, 0);
    }

    updateActiveNavigation(pageId) {
        // Update desktop navigation
        const desktopNavLinks = document.querySelectorAll('.nav-link');
        desktopNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });

        // Update mobile navigation
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });
    }

    toggleMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileNav = document.getElementById('mobileNav');
        
        mobileMenuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
    }

    closeMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileNav = document.getElementById('mobileNav');
        
        mobileMenuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
    }
}

// Game thumbnails hover effects
function setupGameThumbnails() {
    const gameThumbnails = document.querySelectorAll('.game-thumbnail');
    
    gameThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 0 20px hsla(45, 100%, 60%, 0.5)';
            
            const img = this.querySelector('.game-image');
            if (img) {
                img.style.transform = 'scale(1.1)';
            }
        });
        
        thumbnail.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
            
            const img = this.querySelector('.game-image');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });
}

// Card hover effects
function setupCardHoverEffects() {
    const cards = document.querySelectorAll('.stat-card, .tech-card, .team-card, .game-card, .contact-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 0 20px hsla(45, 100%, 60%, 0.2)';
            this.style.borderColor = 'hsla(45, 100%, 60%, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
            this.style.borderColor = 'hsl(0, 0%, 20%)';
        });
    });
}

// Button hover effects
function setupButtonHoverEffects() {
    const buttons = document.querySelectorAll('.btn-gaming');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 0 40px hsla(45, 100%, 60%, 0.8)';
            this.style.borderColor = 'hsl(45, 100%, 60%)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 20px hsla(45, 100%, 60%, 0.3)';
            this.style.borderColor = 'transparent';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1.05)';
        });
    });
}

// Global function to show page (for onclick handlers)
function showPage(pageId) {
    router.navigateTo(pageId);
}

// Initialize everything when DOM is loaded
let router;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize router
    router = new SimpleRouter();
    
    // Setup interactive effects
    setupGameThumbnails();
    setupCardHoverEffects();
    setupButtonHoverEffects();
    
    // Handle logo click
    const logoLink = document.querySelector('.logo-link');
    logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        router.navigateTo('home');
    });
    
    console.log('Chronoptryx Studios website initialized!');
});

// Smooth scroll for internal links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add loading animation for images
function handleImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
            
            img.addEventListener('error', function() {
                console.warn('Failed to load image:', this.src);
                // You could set a placeholder image here
                // this.src = './assets/placeholder.png';
            });
        }
    });
}

// Call image loading handler
document.addEventListener('DOMContentLoaded', handleImageLoading);