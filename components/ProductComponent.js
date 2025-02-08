class ProductComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });  // Attach the Shadow DOM
        this._product = {};  // Holds product data
    }

    // When the component is added to the DOM
    connectedCallback() {
        this.render();  // Call render function
    }

    // Define a property to set product data
    set product(data) {
        this._product = data;
        this.render();
    }

    // Render the component with the product data
    render() {
        const { name, description, image, liked } = this._product;

        // Add template to the shadow DOM
      this.shadowRoot.innerHTML = `
      <style>
.product-card {
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  background: #fff;
  text-align: center;
  padding: 15px;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-content img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.product-content h3 {
  font-size: 1.2em;
  margin: 10px 0;
}

.product-content p {
  font-size: 0.9em;
  color: #555;
  margin-bottom: 10px;
}

.button, .like-btn {
  display: inline-block;
  padding: 8px 12px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
}

.add-to-cart {
  background: #28a745;
  color: white;
}

.like-btn {
  background: #007bff;
  color: white;
}

.like-btn.liked {
  background: #dc3545;
}
</style>

<div class="product-card">
  <div class="product-content">
    <img src="${image}" alt="${name}" />
    <h3>${name}</h3>
    <p>${description}</p>
    <button class="like-btn ${liked ? 'liked' : ''}">
      ${liked ? 'Unlike' : 'Like'}
    </button>
    <button class="add-to-cart button">Add to Cart</button>
  </div>
</div>
`;

        // Event listeners for buttons
        this.shadowRoot.querySelector('.like-btn').addEventListener('click', () => this.toggleLike());
        this.shadowRoot.querySelector('.add-to-cart').addEventListener('click', () => this.addToCart());
    }

    // Toggle product like/unlike
    toggleLike() {
        const liked = !this._product.liked;
        this._product.liked = liked;
        this.dispatchEvent(new CustomEvent('like', { detail: this._product }));
        this.render();  // Re-render with the updated state
    }

    // Add the product to the cart
    addToCart() {
        this.dispatchEvent(new CustomEvent('add-to-cart', { detail: this._product }));
    }
}

// Define the product component
customElements.define('product-component', ProductComponent);
