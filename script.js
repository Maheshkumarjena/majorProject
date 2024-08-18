// Define variables globally

console.log("script loaded");

window.addEventListener('DOMContentLoaded', () => {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    const userName = localStorage.getItem('userName');

    if (loggedIn) {
        // Manipulate DOM elements as required
        const loginBtn = document.getElementsByClassName('login');
        for (let e of loginBtn) {
            e.style.display = 'none';
        }

        const signUp = document.querySelectorAll('#signup');
        for (let e of signUp) {
            e.style.display = 'none';
        }

        const userrr = document.querySelectorAll('.userProfile');
        for (let e of userrr) {
            e.style.display = 'flex';
            e.children[1].innerText = userName;
        }

        const cartbtn = document.getElementsByClassName('cartt');
        for (let e of cartbtn) {
            e.style.border = 'none';
            e.style.opacity = 1;
            e.style.display = 'flex';
        }
    }
});


// sidebar Handler 

const sidebarHandler = () => {
    const element = document.getElementById('sideBar');
    const hasHiddenClass = element.classList.contains('hidden');
    const hasFlexClass = element.classList.contains('flex');
    console.log(`Element has hidden class: ${hasFlexClass}`);
    if (hasHiddenClass) {
        element.classList.remove('hidden');
        element.classList.add('flex')
        document.body.style.overflow = 'hidden';
    }
    else if (hasFlexClass) {
        element.classList.remove('flex');
        element.classList.add('hidden');
        document.body.style.overflow = 'scroll';

    }
};

// signUp js
let users = JSON.parse(localStorage.getItem('users')) || {};

const signup = async () => {
    event.preventDefault();
    const email = await document.getElementById('email').value;
    const password = await document.getElementById('password').value;

    const user = {
        email: email,
        password: password
    };

    users[email] = user; // Assuming 'email' is unique for each user

    localStorage.setItem('users', JSON.stringify(users));

    console.log('User data stored:', users);
};

console.log("users outside ", users);

// These variables are declared globally and can be accessed inside any function
let loginBtn = document.getElementsByClassName('login');
console.log(loginBtn, "outside ");


// sign In
const handlelogin = async () => {
    event.preventDefault();
    const email = await document.getElementById('email').value;
    const password = await document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users'));
    const user = users[email];
    if (user && user.password === password) {
        // Save login state to local storage
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userName', email.split('@')[0]);

        window.location.href = "../../Home.html"; // Redirect to another page
    } else {
        console.log("Login failed");
    }
};



// cart section
// Function to save the total to localStorage
function saveTotalToLocalStorage(total) {
    localStorage.setItem('cartTotal', total.toFixed(2));
}

// Function to retrieve the total from localStorage
function getTotalFromLocalStorage() {
    return parseFloat(localStorage.getItem('cartTotal')) || 0;
}

// Update the total price on page load
window.onload = function () {
    let currentTotal = getTotalFromLocalStorage();
    document.querySelectorAll('.total-price').forEach(el => {
        el.textContent = `$${currentTotal.toFixed(2)}`;
    });
}

// Function to update the quantity and price

function updatePrice() {
    let items = document.querySelectorAll('.item');
    console.log("item",items)
    let total = 0;

    items.forEach(item => {
        let quantity = parseInt(item.querySelector('.quantity-input').value);
        console.log(quantity)
        let price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
        total += quantity * price;
    });

    console.log(total)
    document.querySelector('.subtotal-price').textContent = `$${total}`;
    
    let checkout=document.getElementById('Checkout').innerText=`$${total+20}`
    let final= document.querySelector('#final').innerText = `$${total+20}`;

    saveTotalToLocalStorage(total); // Save the updated total to localStorage
}

// Function to increase quantity
function increaseQuantity(button) {
    let quantityInput = button.parentElement.querySelector('.quantity-input');
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updatePrice();
}

// Function to decrease quantity
function decreaseQuantity(button) {
    let quantityInput = button.parentElement.querySelector('.quantity-input');
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
        updatePrice();
    }
}

updatePrice()
