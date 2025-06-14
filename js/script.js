let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName) {
    cart.push(productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart.`);
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('cart-items')) {
        let cartItems = document.getElementById('cart-items');
        cart.forEach(item => {
            let li = document.createElement('li');
            li.textContent = item;
            cartItems.appendChild(li);
        });
    }
});
