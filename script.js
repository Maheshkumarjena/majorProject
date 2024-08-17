console.log("script loaded")
const sidebarHandler = () => {
    const element = document.getElementById('sideBar'); // Replace with your actual element
const hasHiddenClass = element.classList.contains('hidden');
const hasFlexClass = element.classList.contains('flex');
console.log(`Element has hidden class: ${hasFlexClass}`);
if(hasHiddenClass){
    element.classList.remove('hidden');
    element.classList.add('flex')
}
else if (hasFlexClass){
    element.classList.remove('flex');
    element.classList.add('hidden');
}

};


//  signUp js

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

// const storedUser = JSON.parse(localStorage.getItem('users'));
// console.log('Retrieved user data:', storedUser);



console.log("users outside ", users )



const handlelogin = async () => {
    event.preventDefault();
    const email = await document.getElementById('email').value;
    const password = await document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users'));

    const user = users[email];
    if(user){
        if(user.password === password){
            window.location.href = "../../Home.html";

        }
    }
    else{
        console.log("there is some error")
    }

}