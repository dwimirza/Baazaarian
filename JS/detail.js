document.addEventListener("DOMContentLoaded", function() {
    const quantityInput = document.getElementById("quantity");
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");

    increaseBtn.addEventListener("click", function() {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

    decreaseBtn.addEventListener("click", function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sizeButtons = document.querySelectorAll(".size-btn");

    sizeButtons.forEach(button => {
        button.addEventListener("click", function() {
            if (this.classList.contains("selected")) {
                this.classList.remove("selected");
                return;
            }
            // Hapus kelas 'selected' dari semua tombol
            sizeButtons.forEach(btn => btn.classList.remove("selected"));

            // Tambahkan kelas 'selected' ke tombol yang diklik
            this.classList.add("selected");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
            brand: "UNIQLO",
            image: "/image/product1.avif",
            thumbnails: [
                "/image/ANKLEPANTS1.avif",
                "/image/ANKLEPANTS2.avif",
                "/image/ANKLEPANTS3.avif",
                "/image/ANKLEPANTS4.avif"
            ],
            name: "SMART ANKLE PANTS (WOOL LIKE)",
            category: "Men",
            price: "$39.00",
            bestSeller: true
        },
        {
            brand: "UNIQLO",
            image: "/image/product2.avif",
            thumbnails: [
                "/image/Flannel1.avif",
                "/image/Flannel2.avif",
                "/image/Flannel3.avif",
                "/image/Flannel4.avif"
            ],
            name: "FLANNEL SHIRT | LONG SLEEVE CHECKED",
            category: "Men",
            price: "$29.00",
            bestSeller: true
        },
        {
            brand: "UNIQLO",
            image: "/image/product3.avif",
            thumbnails: [
                "/image/Seersucker1.avif",
                "/image/Seersucker2.avif",
                "/image/Seersucker3.avif"
            ],
            name: "SEERSUCKER VOLUME SKIRT | CHECKED",
            category: "Women",
            price: "$23.00",
            bestSeller: true
        }
    ];

    // Ambil index dari localStorage
    // Ambil index dari localStorage
const selectedProductIndex = parseInt(localStorage.getItem("selectedProductIndex"));
const product = products[selectedProductIndex];

if (selectedProductIndex !== null) {
    // const product = products[selectedProductIndex];

    // Tampilkan di halaman detail
    document.querySelector(".product-brand").textContent = product.brand;
    document.querySelector(".product-title").textContent = product.name;
    document.querySelector(".product-category").textContent = product.category;
    document.querySelector(".product-price").textContent = product.price;
    document.querySelector(".product-image").src = product.image;

    // Tambahkan thumbnail
    const thumbnailContainer = document.querySelector(".thumbnail-container");
    thumbnailContainer.innerHTML = ""; // Bersihkan dulu biar nggak dobel

    product.thumbnails.forEach((thumbSrc) => {
        const img = document.createElement("img");
        img.src = thumbSrc;
        img.classList.add("thumbnail-image"); // Tambahin class biar bisa di-styling
        thumbnailContainer.appendChild(img);
    });

} else {
    console.error("Product tidak ditemukan atau index salah.");
}
document.querySelector("#add-to-cart-btn").addEventListener("click", function() {
    const priceText = product.price; 
    const price = parseFloat(priceText.replace(/[^0-9.]/g, "")); 

    addToCart(product.name, price, product.image);
});
document.querySelectorAll(".thumbnail-container img").forEach(thumbnail => {
    thumbnail.addEventListener("click", function() {
        const mainImage = document.querySelector(".product-image");
        mainImage.src = this.src; // Ganti src gambar utama dengan thumbnail yang diklik
    });
});

});




