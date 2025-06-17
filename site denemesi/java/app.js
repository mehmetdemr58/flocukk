let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function showSlide(index) {
    // Döngüsel kaydırma için index sınırlarını kontrol et
    if (index >= totalImages) {
        currentIndex = 0; // Eğer son resimden sonra ileri giderse, başa döner
    } else if (index < 0) {
        currentIndex = totalImages - 1; // Eğer ilk resimden önce geri giderse, sona gider
    } else {
        currentIndex = index;
    }

    // Yüzde bazında kaydırarak her resmin tam genişliği kadar kaydır
    const offset = -currentIndex * 100; 
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1); // Bir sonraki resme geçer
}

function prevSlide() {
    showSlide(currentIndex - 1); // Bir önceki resme geçer
}
