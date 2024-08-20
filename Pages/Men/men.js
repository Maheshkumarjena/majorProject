let nav1=document.querySelectorAll('#nav-four');

console.log(nav1)
nav1.forEach(e => {
    e.style.display="none"
});


const mensSection = [
    {
        brand: "PETER ENGLAND",
        title: "Men Slim Fit Self Design Shirt",
        currentPrice: 949,
        originalPrice: 1799,
        discount: "47% off",
        dealTag: "Hot Deal",
        imageUrl: "../../assets/mts2.webp"
    },
    {
        brand: "ALLEN SOLLY",
        title: "Men Regular Fit Solid Casual Shirt",
        currentPrice: 1299,
        originalPrice: 1999,
        discount: "35% off",
        dealTag: "Best Seller",
        imageUrl: "../../assets/mts3.webp"
    },
    {
        brand: "LEVI'S",
        title: "Men Slim Fit Denim Shirt",
        currentPrice: 1799,
        originalPrice: 2499,
        discount: "28% off",
        dealTag: "Limited Offer",
        imageUrl: "../../assets/mts4.webp"
    },
    {
        brand: "WRANGLER",
        title: "Men Slim Fit Checkered Shirt",
        currentPrice: 1499,
        originalPrice: 2199,
        discount: "32% off",
        dealTag: "Hot Deal",
        imageUrl: "../../assets/mts5.webp"
    },
    {
        brand: "PARKER",
        title: "Men Slim Fit Checkered Shirt",
        currentPrice: 1499,
        originalPrice: 2199,
        discount: "32% off",
        dealTag: "Hot Deal",
        imageUrl: "../../assets/ms2.webp"
    },
    {
        brand: "WRONG",
        title: "Men Slim Fit Checkered Shirt",
        currentPrice: 1499,
        originalPrice: 2199,
        discount: "32% off",
        dealTag: "Hot Deal",
        imageUrl: "../../assets/ms1.webp"
    },
    {
        brand: "SPYKAR",
        title: "Men Slim Fit Checkered Shirt",
        currentPrice: 1499,
        originalPrice: 2199,
        discount: "32% off",
        dealTag: "Hot Deal",
        imageUrl: "../../assets/ms4.webp"
    },
    {
        brand: "TOMMY HILFIGER",
        title: "Men Slim Fit Checkered Shirt",
        currentPrice: 1499,
        originalPrice: 2199,
        discount: "32% off",
        dealTag: "Hot Deal",
        imageUrl: "../../assets/ms5.webp"
    },
];

const container = document.getElementsByClassName('con-cards');
const heading= document.getElementsByClassName('product-dtl')[0].innerHTML='For men'

mensSection.forEach(product => {
    const card = document.createElement('div');
    card.className = 'con-card';
    
    card.innerHTML = `
        <a onclick="extractData(this)">
    <img class='item-image' src="${product.imageUrl}" alt="${product.title}">
        <div class="con-text">
            <p class="brand-name">${product.brand}</p>
            <p class="product-title">${product.title}</p>
            <div class="price-section">
                <span class="current-price">₹${product.currentPrice}</span>
                <span class="original-price">₹${product.originalPrice}</span>
                <span class="discount">${product.discount}</span>
            </div>
            <div class="deal-tag">${product.dealTag}
            </div>
         </div>
    </a>
    `;
    
    container[0].appendChild(card);
});






function extractData(element) {
    const productCard = element.closest('.con-card'); // Get the closest parent element with the class 'con-card'
    
    const productData = {
        imageUrl: productCard.querySelector('.item-image').src,
        brand: productCard.querySelector('.brand-name').textContent,
        title: productCard.querySelector('.product-title').textContent,
        currentPrice: productCard.querySelector('.current-price').textContent,
        originalPrice: productCard.querySelector('.original-price').textContent,
        discount: productCard.querySelector('.discount').textContent,
        dealTag: productCard.querySelector('.deal-tag').textContent
    };

    // Save product data to localStorage
    localStorage.setItem('selectedProduct', JSON.stringify(productData));
    
    // Open the product detail page
    
    window.location.href = '../productDetail/productDetail.html';
}
