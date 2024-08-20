 // Retrieve cart items from localStorage
 const cartItems = JSON.parse(localStorage.getItem('cartItem')) || [];

 // Reference to the order summary container
 const orderSummary = document.getElementById('order-summary');
 const totalAmountEl = document.getElementById('total-amount');
 const shippingChargeEl = document.getElementById('shipping-charge');
 const grandTotalEl = document.getElementById('grand-total');
 const warningMessageEl = document.getElementById('warning-message');
 const placeOrderBtn = document.getElementById('place-order-btn');
 const billingForm = document.getElementById('billing-form');
 
 let totalAmount = 0;
 const shippingCharge = 20;

 // Function to populate order summary
 function populateOrderSummary() {
     cartItems.forEach(item => {
         const itemTotal = item.currentPrice * item.productQuantity;
         totalAmount += itemTotal;

         const itemEl = document.createElement('p');
         itemEl.innerHTML = `<span>${item.title} x ${item.productQuantity}</span><span>₹${itemTotal}</span>`;
         orderSummary.appendChild(itemEl);
     });

     // Update the total amount
     totalAmountEl.textContent = totalAmount;
     shippingChargeEl.textContent = shippingCharge;
     grandTotalEl.textContent = totalAmount + shippingCharge;
 }

 // Function to validate form
 function validateForm() {
    const inputs = billingForm.querySelectorAll('input[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
        }
    });

    return isValid;
}

// Function to handle form submission
function handleOrder() {
    if (validateForm()) {
        warningMessageEl.textContent = 'Order placed successfully';
        // Proceed with form submission or order placement logic
        setTimeout(() => {
            warningMessageEl.textContent = '';

        }, 3000);

    } else {
        warningMessageEl.textContent = 'Please fill all the necessary fields.';
        setTimeout(() => {
            warningMessageEl.textContent = '';

        }, 3000);
    }
}



populateOrderSummary();
placeOrderBtn.addEventListener('click', handleOrder);


 // Populate order summary on page load