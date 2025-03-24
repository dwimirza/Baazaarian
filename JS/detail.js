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
        },
        {
            brand: "H&M",
            image: "/image/product4.png",
            thumbnails: [
                "/image/product4.png",
                "/image/product4(1).png",
                "/image/product4(2).png",
            ],
            name: "MUSCLE FIT SHORT-SLEEVED SHIRT",
            category: "Men",
            price: "$11.00",
        },
        {
            brand: "UNIQLO",
            image: "/image/product5.avif",
            thumbnails: [
                "/image/product5.avif",
                "/image/product5(1).avif",
                "/image/product5(2).avif",
                "/image/product5(3).avif"
            ],
            name: "SOFT FLANNEL GATHERED BLOUSE",
            category: "Women",
            price: "$8.00",
        },
        {
            brand: "UNIQLO",
            image: "/image/product6.avif",
            thumbnails: [
                "/image/product6.avif",
                "/image/product6(1).avif",
                "/image/product6(2).avif"
            ],
            name: "DRY SWEAT WIDE PANTS",
            category: "Women",
            price: "$12.00",
        },
        {
            brand: "UNIQLO",
            image: "/image/product7.avif",
            thumbnails: [
                "/image/product7.avif",
                "/image/product7(1).avif",
                "/image/product7(2).avif"
            ],
            name: "GIRLS RIBBED CROPPED BRATOP",
            category: "Kids",
            price: "$12.00",
        },
        {
            brand: "UNIQLO",
            image: "/image/product8.avif",
            name: "RIBBED ONE PIECE OUTFIT STRIPE",
            category: "Baby",
            price: "$12.00",
        },
        {
            brand: "UNIQLO",
            image: "/image/product9.avif",
            name: "KIDS AIPISM COTTON CREW NECK T-SHIRT",
            category: "Kids",
            price: "$19.00",
        }
    ];

    // Ambil nama produk dari localStorage
    const selectedProductName = localStorage.getItem("selectedProductName");

    // Cari produk berdasarkan nama
    const product = products.find(p => p.name === selectedProductName);

    if (product) {
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
     
    const quantity = document.getElementById('quantity').value;
    addToCart(product.name, price, product.image, quantity);
});
document.querySelectorAll(".thumbnail-container img").forEach(thumbnail => {
    thumbnail.addEventListener("click", function() {
        const mainImage = document.querySelector(".product-image");
        mainImage.src = this.src; // Ganti src gambar utama dengan thumbnail yang diklik
    });
});

});