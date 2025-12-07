// ========================================
// FIX DEVICE - JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ----------------------------------------
    // Elements
    // ----------------------------------------
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const navOverlay = document.querySelector('.nav-overlay');
    const body = document.body;
    
    let isMenuOpen = false;
    
    // ----------------------------------------
    // Menu Functions
    // ----------------------------------------
    function openMenu() {
        isMenuOpen = true;
        hamburger.classList.add('active');
        navbar.classList.add('active');
        navOverlay.classList.add('active');
        body.classList.add('nav-open');
    }
    
    function closeMenu() {
        isMenuOpen = false;
        hamburger.classList.remove('active');
        navbar.classList.remove('active');
        navOverlay.classList.remove('active');
        body.classList.remove('nav-open');
    }
    
    // ----------------------------------------
    // Scroll Functions
    // ----------------------------------------
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    
    function scrollToContact() {
        const lastSection = document.querySelector(".LastSection");
        if (lastSection) {
            const sectionPosition = lastSection.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: sectionPosition - 100,
                behavior: "smooth"
            });
        }
    }
    
    // ----------------------------------------
    // Hamburger Click
    // ----------------------------------------
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    // ----------------------------------------
    // Overlay Click - Close menu
    // ----------------------------------------
    navOverlay.addEventListener('click', function() {
        closeMenu();
    });
    
    // ----------------------------------------
    // Navbar Click - Event Delegation
    // ----------------------------------------
    navbar.addEventListener('click', function(e) {
        // Check if clicked element is a link
        const link = e.target.closest('a');
        
        if (link) {
            e.preventDefault();
            e.stopPropagation();
            
            const linkId = link.id;
            
            // Close menu
            closeMenu();
            
            // Wait for menu to close, then scroll
            setTimeout(function() {
                if (linkId === 'inicio') {
                    scrollToTop();
                } else if (linkId === 'contactos') {
                    scrollToContact();
                } else if (linkId === 'login') {
                    // TODO: Implementar login
                    // window.location.href = "login.html";
                    console.log("Login - pendiente de implementar");
                }
            }, 350);
        }
    });
    
    // ----------------------------------------
    // Keyboard - Close on Escape
    // ----------------------------------------
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            closeMenu();
        }
    });
    
    // ----------------------------------------
    // Resize - Close menu on desktop
    // ----------------------------------------
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && isMenuOpen) {
            closeMenu();
        }
    });
    
});