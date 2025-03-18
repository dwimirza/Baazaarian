let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-container img");
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    document.querySelector(".carousel-container").style.transform = 
        `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto-slide every 3 seconds
setInterval(() => {
    nextSlide();
}, 3000);

function showSlide1(index) {
    const slidesContainer = document.querySelector(".carousel-container-best");
    const slides = document.querySelectorAll(".carousel-container-best img");
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0; // Kembali ke gambar pertama
    } else if (index < 0) {
        currentIndex = totalSlides - 1; // Jika di awal, lompat ke gambar terakhir
    } else {
        currentIndex = index;
    }

    // Geser berdasarkan lebar gambar (80vw + margin kanan-kiri)
    const imageWidth = slides[0].clientWidth; // Ambil ukuran gambar
    const margin = 10 * window.innerWidth / 100; // Hitung margin kiri & kanan (10vw)
    const totalMove = imageWidth + (2 * margin); // Perhitungan total lebar yang harus digeser

    slidesContainer.style.transform = `translateX(-${currentIndex * totalMove}px)`;
}

function nextSlide1() {
    showSlide1(currentIndex + 1);
}

function prevSlide1() {
    showSlide1(currentIndex - 1);
}

setInterval(nextSlide1, 3000);


// navbar scrolled
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});
