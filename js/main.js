// Fetch products from the server
async function fetchProducts(category = '') {
    const url = category ? `/api/products?category=${category}` : '/api/products';
    const response = await fetch(url);
    const products = await response.json();
    renderProducts(products);
}

// Render products in the product list
function renderProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear existing products

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product');

        productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <button class="like-btn" data-id="${product.id}">
            ${product.liked ? 'Unlike' : 'Like'}
        </button>
        <button class="add-to-cart" data-id="${product.id}">
            Add to Cart
        </button>
    `;

        productItem.querySelector('.like-btn').addEventListener('click', () => likeProduct(product.id));
        productItem.querySelector('.add-to-cart').addEventListener('click', () => addToCart(product.id));

        productList.appendChild(productItem);
    });
}

// Handle liking a product
async function likeProduct(productId) {
    const response = await fetch('/api/products/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
    });
    const updatedProduct = await response.json();
    alert(updatedProduct.liked ? 'Product liked!' : 'Product unliked!');
    fetchProducts(); // Refresh the product list
}

// Add product to cart
async function addToCart(productId) {
    const quantity = 1; // Default to 1 for now
    const response = await fetch('/api/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, quantity }),
    });
    const addedItem = await response.json();
    alert('Product added to cart');
    // You can add more cart update functionality here, e.g., updating cart display
}

// Filter products by category
async function filterProductsByCategory(event) {
    const category = event.target.value;
    fetchProducts(category);
}

// Initialize components on page load
window.onload = () => {
    fetchProducts(); // Fetch all products initially

    // Add event listener to filter by category
    const categoryFilter = document.getElementById('category-filter');
    categoryFilter.addEventListener('change', filterProductsByCategory);
};
