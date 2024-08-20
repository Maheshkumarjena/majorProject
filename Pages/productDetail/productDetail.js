console.log('product detail')

document.addEventListener('DOMContentLoaded', () => {

    const productData = JSON.parse(localStorage.getItem('selectedProduct'));
    
    if (productData) {
        document.querySelector('.main-image').src = productData.imageUrl;
        document.querySelector('.product-name').textContent = productData.title;
        document.querySelector('.price').textContent = productData.currentPrice;
        document.querySelector('.brand-name').textContent = productData.brand;
        document.querySelectorAll('.thumbnail').forEach(element => {
            element.src=productData.imageUrl
        });
    }
});

window.addEventListener('beforeunload', () => {
    localStorage.removeItem('selectedProduct');
});


function addToCart() {
    const productCard = document.getElementsByClassName('product-detail')[0];

    const productData = {
        imageUrl: productCard.querySelector('.main-image').src,
        brand: productCard.querySelector('.brand-name').textContent,
        title: productCard.querySelector('.product-name').textContent,
        currentPrice: productCard.querySelector('.price').textContent.slice(1),
        productQuantity: Number(productCard.querySelector('.product-quantity').value)
    };

    // Retrieve existing cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItem')) || [];

    let productExists = false;

    // Check if the product already exists in the cart
    cartItems.forEach(item => {
        if (item.imageUrl === productData.imageUrl) {
            // If it exists, increase the quantity
            item.productQuantity += productData.productQuantity;
            productExists = true;
        }
    });

    // If the product does not exist, add it to the cart
    if (!productExists) {
        cartItems.push(productData);
    }

    // Save the updated cartItems array back to localStorage
    localStorage.setItem('cartItem', JSON.stringify(cartItems));
}

// localStorage.removeItem('cartItem')