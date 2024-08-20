console.log('product detail')
// extracting elements from the productDetail page
let mImage = document.getElementsByClassName('main-image');
let tumbnainImage = document.getElementsByClassName('thumbnail');
let productName = document.getElementsByClassName('product-name')[0];
let price = document.getElementsByClassName('price')[0];
let desc = document.getElementsByClassName('short-description')[0];
let cartbtn = document.getElementById('cartBtn');
console.log("mImage",mImage);
// productDetail.js

document.addEventListener('DOMContentLoaded', () => {

    const productData = JSON.parse(localStorage.getItem('selectedProduct'));
    
    if (productData) {
        document.querySelector('.main-image').src = productData.imageUrl;
        document.querySelector('.product-name').textContent = productData.title;
        document.querySelector('.price').textContent = productData.currentPrice;
        document.querySelectorAll('.thumbnail').forEach(element => {
            element.src=productData.imageUrl
        });
    }
});

window.addEventListener('beforeunload', () => {
    localStorage.removeItem('selectedProduct');
});
