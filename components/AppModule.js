class AppModule extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.cart = [];  // Holds the cart items
        this.products = [];  // Holds the list of products
    }

    connectedCallback() {
        this.fetchProducts();  // Fetch products when the component is loaded
    }

    // Fetch products from the API
    async fetchProducts() {
        try {
            // Make a request to the API to fetch products
            const response = await fetch('http://localhost:3000/api/products'); // Replace with your actual API URL
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }

            // Parse the response data as JSON
            const data = await response.json();

            // Assuming the data is an array of products
            this.products = data.map(product => ({
                id: product.id,
                name: product.name,
                description: product.description,
                image: product.image,
                price: product.price,
                liked: product.liked || false, // Add a liked property if it's not available in the response
            }));

            this.render(); // Render the component after fetching data
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }


    // Add a product to the cart
    addToCart(product) {
        const existingItem = this.cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.cart.push({ ...product, quantity: 1 });
        }
        this.updateCart();
    }

    // Update the cart display
    updateCart() {
        const cartComponent = this.shadowRoot.querySelector('cart-component');
        cartComponent.cartItems = this.cart;
    }

    // Render the product list and the cart
    render() {
        this.shadowRoot.innerHTML = `
        <div class="app">
            ${this.products.map(product => `
            <product-component></product-component>
            `).join('')}
        </div>
        <cart-component></cart-component>
    `;

        // Attach product data to each product component
        this.products.forEach((product, index) => {
            const productComponent = this.shadowRoot.querySelectorAll('product-component')[index];
            productComponent.product = product;

            productComponent.addEventListener('add-to-cart', (event) => this.addToCart(event.detail));
        });
    }
}

// Define the AppModule component
customElements.define('app-module', AppModule);
