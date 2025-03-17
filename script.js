let currentIndex = 0;

function showSlide() {
    const slides = document.querySelectorAll(".carousel-container img");
    const totalSlides = slides.length;

    currentIndex = (currentIndex + 1) % totalSlides;

    document.querySelector(".carousel-container").style.transform = 
        `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide setiap 3 detik
setInterval(showSlide, 3000);
