const express = require('express');
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/products');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files like images, CSS, and JS
app.use(express.static('public'));

// Routes
app.use('/api', productsRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
