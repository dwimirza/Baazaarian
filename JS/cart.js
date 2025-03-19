let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image) {
    let decodedImage = decodeURIComponent(image); // Convert back to original URL
    console.log(image);
    let item = cart.find(p => p.name === name);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }
    saveAndUpdateCart();
    toggleCart(true); // Open cart when adding
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    saveAndUpdateCart();
}

function saveAndUpdateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    let cartContainer = document.getElementById("cart-items");
    let totalPrice = 0;
    cartContainer.innerHTML = "";

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-column">
                <p class="item-name">${item.name}</p>
                <span class="item-qty">Quantity : ${item.quantity}</span>
                <span class="item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <span class="remove-btn" onclick="removeFromCart('${item.name}')"><i class="fa-solid fa-x" style="color: black;"></i></span>
            </div>
        `;
    });

    document.getElementById("total-price").textContent =`$${totalPrice.toFixed(2)}`
}

function checkout() {
    alert("Proceeding to checkout with " + cart.length + " items.");
    localStorage.removeItem("cart");
    cart = [];
    renderCart();
    toggleCart(false);
}

function toggleCart(forceOpen = null) {
    let cart = document.getElementById("cart");
    let overlay = document.getElementById("overlay");
    let mainContent = document.getElementById("main-content");

    let isOpen = forceOpen !== null ? forceOpen : !cart.classList.contains("open");

    if (isOpen) {
        cart.classList.add("open");
        overlay.classList.add("active");
        mainContent.classList.add("no-click");
    } else {
        cart.classList.remove("open");
        overlay.classList.remove("active");
        mainContent.classList.remove("no-click");
    }
}

renderCart();