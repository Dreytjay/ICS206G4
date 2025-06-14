// script.js

// Cart functions for adding and displaying products
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.product-item button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.previousElementSibling.previousElementSibling.textContent;
            addToCart(productName);
            alert(`${productName} has been added to your cart.`);
        });
    });

    displayCart();
});

// Add product to localStorage
function addToCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productName);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Display cart items
function displayCart() {
    if (document.getElementById('cart-items')) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<li>Your cart is empty.</li>';
        } else {
            cart.forEach(item => {
                let li = document.createElement('li');
                li.textContent = item;
                cartItemsContainer.appendChild(li);
            });
        }
    }
}
