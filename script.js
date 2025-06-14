let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(product + " added to cart!");
}

function displayCart() {
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<li>Your cart is empty.</li>';
        return;
    }

    cart.forEach((item, index) => {
        cartItems.innerHTML += `<li>${item} <button onclick="removeFromCart(${index})">Remove</button></li>`;
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

if (window.location.pathname.includes('cart.html')) {
    displayCart();
}
