const express = require('express');
const client = require('../db');
const router = express.Router();

// Fetch products with optional category filter
router.get('/products', async (req, res) => {
    const category = req.query.category;
    let query = 'SELECT * FROM products';

    if (category) {
        query += ' WHERE category = $1';
    }

    try {
        const result = await client.query(query, category ? [category] : []);
        res.json(result.rows); // Send the fetched products to the frontend
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

// Handle "like" functionality (example: toggle like status)
router.post('/products/like', async (req, res) => {
    const { productId } = req.body;
    try {
        const result = await client.query(
            'UPDATE products SET liked = NOT liked WHERE id = $1 RETURNING *',
            [productId]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error liking product:', err);
        res.status(500).json({ error: 'Failed to like product' });
    }
});

// Handle "add to cart" functionality
router.post('/cart/add', async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        const result = await client.query(
            'INSERT INTO cart (product_id, quantity) VALUES ($1, $2) RETURNING *',
            [productId, quantity]
        );
        res.json(result.rows[0]); // Return the added cart item
    } catch (err) {
        console.error('Error adding to cart:', err);
        res.status(500).json({ error: 'Failed to add to cart' });
    }
});

module.exports = router;
