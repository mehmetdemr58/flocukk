let lastScrollTop = 0; // Son kaydırma pozisyonu
const headerone = document.querySelector('.headerone'); // headerone elemanını seç

window.addEventListener('scroll', function() {
    let currentScroll = window.scrollY || document.documentElement.scrollTop; // Yeni scroll pozisyonu

    // Aşağı kaydırma
    if (currentScroll > lastScrollTop) {
        headerone.style.transform = 'translateY(-100%)'; // Yukarı kaydır
    } else { // Yukarı kaydırma
        headerone.style.transform = 'translateY(0)'; // Görünür yap
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Yalnızca pozitif kaydırma pozisyonları
});


const header = document.querySelector('.headerone');
let isScrolling;

// Kaydırma olayını dinle
window.addEventListener('scroll', () => {
    // Header'ı gizle
    header.style.transform = 'translateY(-100%)';

    // Daha önce başlatılmış zamanlayıcıyı temizle
    clearTimeout(isScrolling);

    // Zamanlayıcıyı yeniden başlat
    isScrolling = setTimeout(() => {
        // Kaydırma durduğunda header'ı görünür yap
        header.style.transform = 'translateY(0)';
    }, 200); // 200ms sonra görünür yap
});








const sliderTrack = document.querySelector(".slider-track");
let currentIndex = 0;
const itemsPerView = 5;
const totalItems = document.querySelectorAll(".slider-item").length;

function slideNext() {
    if (currentIndex < totalItems - itemsPerView) {
        currentIndex++;
        sliderTrack.style.transform = `translateX(-${currentIndex * 215}px)`;
    }
}

function slidePrev() {
    if (currentIndex > 0) {
        currentIndex--;
        sliderTrack.style.transform = `translateX(-${currentIndex * 215}px)`;
    }
}

