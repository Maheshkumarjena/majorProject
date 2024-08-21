function ChangeLook() {
    // Get all elements with the class 'underline-word'
    const words = document.querySelectorAll('#nav-three');

    words.forEach(wordElement => {
        // Create a new underline element
        
        wordElement.style.fontFamily='saint-sarif';
        wordElement.style.color='purple';
        wordElement.style.transform='scale(1.4)';


    });
}

// Adjust the underline width when the document is loaded
document.addEventListener('DOMContentLoaded', ChangeLook);

// Optionally adjust underline width on window resize
window.addEventListener('DOMContentLoaded', ChangeLook);

  
  let nav1=document.querySelectorAll('#nav-four');
  
  // console.log(nav1)
  nav1.forEach(e => {
    e.style.display="none"
  });

  const kidsSection = [
    {
        brand: "KIDSVILLE",
        title: "Kids Slim Fit Self Design T-Shirt",
        currentPrice: 599,
        originalPrice: 999,
        discount: "40% off",
        dealTag: "Hot Deal",
        imageUrl: "../../assets/bjk.webp"
    },
    {
        brand: "MINI CLUB",
        title: "Kids Regular Fit Solid Casual Dress",
        currentPrice: 799,
        originalPrice: 1199,
        discount: "33% off",
        dealTag: "Best Seller",
        imageUrl: "../../assets/gsw.webp"
    },
    {
        brand: "TOYLAND",
        title: "Kids Slim Fit Denim Shorts",
        currentPrice: 899,
        originalPrice: 1399,
        discount: "36% off",
        dealTag: "Limited Offer",
        imageUrl: "../../assets/gww.webp"
    },
    {
        brand: "LITTLE FOLKS",
        title: "Kids Slim Fit Checkered Dress",
        currentPrice: 799,
        originalPrice: 1199,
        discount: "33% off",
        dealTag: "Hot Deal",
        imageUrl: "../../assets/bs.jpg"
    },
    {
        brand: "PLAYFUL KIDS",
        title: "Kids Slim Fit Printed Dress",
        currentPrice: 749,
        originalPrice: 1099,
        discount: "32% off",
        dealTag: "Hot Deal",
        imageUrl: "../../assets/gtw.webp"
    },
    {
        brand: "TOYS R US",
        title: "Kids Slim Fit Striped T-Shirt",
        currentPrice: 699,
        originalPrice: 999,
        discount: "30% off",
        dealTag: "Hot Deal",
        imageUrl: "../../assets/gs.webp"
    },
    {
        brand: "CARTOON NETWORK",
        title: "Kids Slim Fit Character Dress",
        currentPrice: 849,
        originalPrice: 1199,
        discount: "29% off",
        dealTag: "Hot Deal",
        imageUrl: "../../assets/bts.webp"
    },
    {
        brand: "FROSTY",
        title: "Kids Slim Fit Graphic Hoodie",
        currentPrice: 999,
        originalPrice: 1399,
        discount: "29% off",
        dealTag: "Hot Deal",
        imageUrl: "../../assets/bsw.webp"
    },
];

  const container = document.getElementsByClassName('con-cards');
  const heading= document.getElementsByClassName('product-dtl')[0].innerHTML='For Kids'
  
  kidsSection.forEach(product => {
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
  