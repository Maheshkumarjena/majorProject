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

let signUp = document.querySelectorAll('#signup');
let userrr = document.querySelectorAll('.userProfile');
let cartbtn = document.getElementsByClassName('cartt');


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

