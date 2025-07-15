

// Stress questions data (partial example)
const stressQuestions = [
    {
        category: "Akademik",
        questions: [
            "Saya berasa terbeban dengan jumlah kerja sekolah/universiti.",
            "Saya sering bimbang tentang keputusan peperiksaan.",
            "Saya sukar untuk mengimbangi masa antara akademik dan kehidupan peribadi.",
            "Saya berasa tidak cukup persediaan untuk menghadapi peperiksaan."
        ]
    },
    {
        category: "Sosial",
        questions: [
            "Saya berasa sukar untuk menyesuaikan diri dengan rakan sebaya.",
            "Saya sering berasa terasing dalam kumpulan sosial.",
            "Saya bimbang tentang apa yang orang lain fikirkan tentang saya.",
            "Saya mengalami kesukaran untuk membuat kawan baru."
        ]
    }
    // More categories and questions would be added here
];

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            body.classList.toggle('menu-open');
            
            // Ubah ikon hamburger
            if (navLinks.classList.contains('active')) {
                hamburger.innerHTML = '✕';
                hamburger.setAttribute('aria-expanded', 'true');
            } else {
                hamburger.innerHTML = '☰';
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Tutup menu saat mengklik link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
                hamburger.innerHTML = '☰';
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Tutup menu saat mengklik di luar menu
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-container') && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
                hamburger.innerHTML = '☰';
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }
});


/* SECURITY */
document.addEventListener('DOMContentLoaded', function() {
    // 1. Disable horizontal scrolling/swiping on mobile
    document.addEventListener('touchmove', function(e) {
        // Prevent horizontal scrolling
        if (Math.abs(e.touches[0].pageX - startX) > Math.abs(e.touches[0].pageY - startY)) {
            e.preventDefault();
        }
    }, { passive: false });
    
    let startX, startY;
    document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
    }, { passive: true });

    // 2. Disable right click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // 3. Disable Ctrl key combinations and F12
    document.addEventListener('keydown', function(e) {
        // Disable F12
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        
        // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U
        if (e.ctrlKey && (e.key === 'I' || e.key === 'i' || 
                          e.key === 'J' || e.key === 'j' || 
                          e.key === 'C' || e.key === 'c' || 
                          e.key === 'U' || e.key === 'u')) {
            e.preventDefault();
            return false;
        }
    });

    // 4. Disable text selection and image dragging
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });
    
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });
    
    // CSS to help prevent selection
    const style = document.createElement('style');
    style.textContent = `
        * {
            user-select: none !important;
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
        }
        img {
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);
});