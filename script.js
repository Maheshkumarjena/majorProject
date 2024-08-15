// let browserWidth = window.innerWidth;
// let browserHeight = window.innerHeight;
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



// SIDEBAR js
