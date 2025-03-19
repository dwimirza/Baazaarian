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