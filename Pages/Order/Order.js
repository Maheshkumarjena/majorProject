document.addEventListener('DOMContentLoaded', () => {
    const orderList = document.getElementById('order-list');

    // Retrieve cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItem')) || [];

    
    console.log(cartItems)
    console.log(cartItems)
    if (cartItems.length === 0) {
        orderList.innerHTML = '<p>No orders found.</p>';
        return;
    }

    // Loop through the cart items and create HTML for each item
    cartItems.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        
        orderItem.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.title}">
            <div class="order-item-details">
                <h2>${item.title}</h2>
                <p>${item.brand}</p>
                <p>Quantity: ${item.productQuantity}</p>
            </div>
            <div class="price">₹${item.currentPrice}</div>
        `;

        orderList.appendChild(orderItem);
    });
});
