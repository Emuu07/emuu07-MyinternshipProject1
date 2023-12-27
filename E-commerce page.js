<script>
let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    alert(`${product} added to cart!`);
}

function viewCart() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        let cartDetails = 'Your Cart:\n';
        cart.forEach(item => {
            cartDetails += `${item.product} - $${item.price}\n`;
        });
        alert(cartDetails);
    }
}
</script>
