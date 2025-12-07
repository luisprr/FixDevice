document.addEventListener('DOMContentLoaded', function() {
    
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const navOverlay = document.querySelector('.nav-overlay');
    const body = document.body;
    
    let isMenuOpen = false;

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

    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    navOverlay.addEventListener('click', function() {
        closeMenu();
    });
    
    navbar.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        
        if (link) {
            e.preventDefault();
            e.stopPropagation();
            
            const linkId = link.id;
            
            closeMenu();
            
            setTimeout(function() {
                if (linkId === 'inicio') {
                    scrollToTop();
                } else if (linkId === 'contactos') {
                    scrollToContact();
                } else if (linkId === 'login') {
                    console.log("Login - pendiente de implementar");
                }
            }, 350);
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            closeMenu();
        }
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && isMenuOpen) {
            closeMenu();
        }
    });
    
});
