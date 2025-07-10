// Toggle mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('navMenu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});

// Keranjang sederhana
const cart = [];
function addToCart(name, price) {
    cart.push({ name, price });
    document.getElementById('cartCount').textContent = cart.length;
    alert(`${name} berhasil ditambahkan ke keranjang!`);
}
