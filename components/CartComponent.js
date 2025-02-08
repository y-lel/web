class CartComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._cartItems = [];
    }

    connectedCallback() {
        this.render();
    }

    set cartItems(items) {
        this._cartItems = items;
        this.render();
    }


    render() {
        const total = this._cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const cartList = this._cartItems.map(item => `
      <li>${item.name} - ${item.quantity} x $${item.price}</li>
    `).join('');

        this.shadowRoot.innerHTML = `
      <style>
        .cart {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
        .cart ul {
          list-style: none;
          padding: 0;
        }
      </style>
      <div class="cart">
        <h3>Your Cart</h3>
        <ul>${cartList}</ul>
        <div>Total: $${total.toFixed(2)}</div>
      </div>
    `;
    }
}

// Define the cart component
customElements.define('cart-component', CartComponent);
