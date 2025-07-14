

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