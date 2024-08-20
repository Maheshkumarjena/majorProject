function adjustUnderlines() {
  // Get all elements with the class 'underline-word'
  const words = document.querySelectorAll('#nav-one');

  words.forEach(wordElement => {
      // Create a new underline element
      const underlineElement = document.createElement('div');
      
      // Calculate the width and position
      const wordWidth = wordElement.offsetWidth;
      const wordHeight = wordElement.offsetHeight;
      const wordOffsetTop = wordElement.offsetTop;
      const wordOffsetLeft = wordElement.offsetLeft;

      // Style the underline
      underlineElement.style.position = 'absolute';
      underlineElement.style.left = `${wordOffsetLeft+2}px`;
      underlineElement.style.top = `${wordOffsetTop + wordHeight}px`;
      underlineElement.style.width = `${wordWidth-2}px`;
      underlineElement.style.height = '1px'; // Thickness of the underline
      underlineElement.style.backgroundColor = 'black'; // Color of the underline
      
      // Append the underline element to the container
      const container = wordElement.parentElement;
      container.style.position = 'relative';
      container.appendChild(underlineElement);
  });
}

// Adjust the underline width when the document is loaded
document.addEventListener('DOMContentLoaded', adjustUnderlines);

// Optionally adjust underline width on window resize
window.addEventListener('DOMContentLoaded', adjustUnderlines);


let nav1=document.querySelectorAll('#nav-four');

// console.log(nav1)
nav1.forEach(e => {
  e.style.display="none"
});

const womensSection = [
  {
      brand: "ZARA",
      title: "Women Slim Fit Self Design Dress",
      currentPrice: 1299,
      originalPrice: 2299,
      discount: "43% off",
      dealTag: "Hot Deal",
      imageUrl: "../../assets/kurta4.webp"
  },
  {
      brand: "H&M",
      title: "Women Regular Fit Solid Casual Dress",
      currentPrice: 1599,
      originalPrice: 2499,
      discount: "36% off",
      dealTag: "Best Seller",
      imageUrl: "../../assets/west2.png"
  },
  {
      brand: "MANGO",
      title: "Women Slim Fit Denim Dress",
      currentPrice: 1999,
      originalPrice: 2899,
      discount: "31% off",
      dealTag: "Limited Offer",
      imageUrl: "../../assets/kurta1.webp"
  },
  {
      brand: "FOREVER 21",
      title: "Women Slim Fit Checkered Dress",
      currentPrice: 1699,
      originalPrice: 2499,
      discount: "32% off",
      dealTag: "Hot Deal",
      imageUrl: "../../assets/west3.png"
  },
  {
      brand: "GUESS",
      title: "Women Slim Fit Checkered Dress",
      currentPrice: 1799,
      originalPrice: 2599,
      discount: "31% off",
      dealTag: "Hot Deal",
      imageUrl: "../../assets/kurta4.webp"
  },
  {
      brand: "RIVER ISLAND",
      title: "Women Slim Fit Checkered Dress",
      currentPrice: 1899,
      originalPrice: 2699,
      discount: "30% off",
      dealTag: "Hot Deal",
      imageUrl: "../../assets/west1.png"
  },
  {
      brand: "BERSHKA",
      title: "Women Slim Fit Checkered Dress",
      currentPrice: 1999,
      originalPrice: 2799,
      discount: "29% off",
      dealTag: "Hot Deal",
      imageUrl: "../../assets/kurta6.webp"
  },
  {
      brand: "ASOS",
      title: "Women Slim Fit Checkered Dress",
      currentPrice: 2099,
      originalPrice: 2899,
      discount: "28% off",
      dealTag: "Hot Deal",
      imageUrl: "../../assets/wd4.jpg"
  },
];

const container = document.getElementsByClassName('con-cards');
const heading= document.getElementsByClassName('product-dtl')[0].innerHTML='For Women'

womensSection.forEach(product => {
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
