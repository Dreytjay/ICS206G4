// Basic Form Validation for Contact Page
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return false; // Prevent form submission
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address.');
        return false;
    }

    alert('Form submitted successfully!');
    return true; // Allow form submission
}

// Example of Simple DOM Interaction: Add to Cart
function addToCart() {
    alert('Product added to cart!');
}
