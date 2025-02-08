const { Client } = require('pg');

const client = new Client({
    user: 'postgres', // Replace with your PostgreSQL username
    host: 'localhost', // or your database host
    database: 'skincare', // Replace with your database name
    password: 'admin', // Replace with your password
    port: 5432, // Default PostgreSQL port
});

client.connect()
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(err => {
        console.error('Database connection error:', err.stack);
    });

module.exports = client;
