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
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

const products = [
    {
        image: "./image/product1.avif",
        name: "SMART ANKLE PANTS (WOOL LIKE)",
        category: "Men",
        price: "$39.00",
        bestSeller: true
    },
    {
        image: "./image/product2.avif",
        name: "FLANNEL SHIRT | LONG SLEEVE CHECKED",
        category: "Men",
        price: "$29.00",
        bestSeller: true
    },
    {
        image: "./image/product3.avif",
        name: "SEERSUCKER VOLUME SKIRT",
        category: "Women",
        price: "$23.00",
        bestSeller: true
    }
];

const imgElement = document.getElementById("product-img");
const nameElement = document.getElementById("product-name");
const categoryElement = document.getElementById("product-category");
const priceElement = document.getElementById("product-price");
const bestSellerElement = document.getElementById("best-seller");

// Fungsi untuk memperbarui tampilan produk
function updateProduct() {
    imgElement.src = products[currentIndex].image;
    nameElement.textContent = products[currentIndex].name;
    categoryElement.textContent = products[currentIndex].category;
    priceElement.textContent = products[currentIndex].price;

    // Menampilkan atau menyembunyikan label Best Seller
    if (products[currentIndex].bestSeller) {
        bestSellerElement.style.display = "inline-block";
    } else {
        bestSellerElement.style.display = "none";
    }
}

// Event listener untuk tombol navigasi
document.querySelector(".prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? products.length - 1 : currentIndex - 1;
    updateProduct();
});

document.querySelector(".next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex === products.length - 1) ? 0 : currentIndex + 1;
    updateProduct();
});

// Memanggil fungsi pertama kali untuk menampilkan produk awal
updateProduct();

// sort by category
document.querySelectorAll('.category-product button').forEach(button => {
    button.addEventListener('click', function () {
        let category = this.getAttribute('data-category');

        // Hapus class 'active' dari semua tombol dan tambahkan ke tombol yang diklik
        document.querySelectorAll('.category-product button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Filter produk berdasarkan kategori
        document.querySelectorAll('.product-card').forEach(product => {
            if (category === "ALL" || product.getAttribute('data-category') === category) {
                product.classList.remove('hidden');
            } else {
                product.classList.add('hidden');
            }
        });
    });
});



