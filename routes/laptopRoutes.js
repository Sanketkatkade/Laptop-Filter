const express = require('express');
const router = express.Router();
const filterLaptopsByPrice = require('../utils/filter'); // Assuming your filter logic is in utils/filter.js

// Define the route to fetch laptops
router.get('/', (req, res) => {
    const minPrice = parseInt(req.query.minPrice) || 20000;  // Default min price
    const maxPrice = parseInt(req.query.maxPrice) || 50000;  // Default max price
    const sortBy = req.query.sortBy || 'price';              // Default sort by 'price'
    const order = req.query.order || 'asc';                  // Default order 'asc'

    // Call the filter function with the price, sorting parameters
    filterLaptopsByPrice(minPrice, maxPrice, sortBy, order)
        .then((laptops) => {
            res.json(laptops); // Return filtered and sorted laptops as JSON
        })
        .catch((err) => {
            console.error('Error fetching laptops:', err);
            res.status(500).send('Internal Server Error');
        });
});

module.exports = router;
