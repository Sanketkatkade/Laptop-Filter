const fs = require('fs');
const csv = require('csv-parser');

function filterLaptops(minPrice, maxPrice, sortBy, order) {
    return new Promise((resolve, reject) => {
        const laptops = [];
        fs.createReadStream('./data/laptop.csv')
            .pipe(csv())
            .on('data', (row) => {
                // Remove currency symbol and parse the price as an integer
                const price = parseInt(row.Price.replace(/[^0-9.-]+/g, ""), 10); // Remove ₹ and parse as integer
                
                if (price >= minPrice && price <= maxPrice) {
                    laptops.push({
                        Brand: row.brand,       // Ensure that the CSV column is 'brand'
                        Model: row.Model,
                        Price: price,           // Price as an integer
                        Rating: parseFloat(row.Rating), // Ensure rating is a number
                        Processor_Brand: row.processor_brand // Ensure that the CSV column is 'processor_brand'
                    });
                }
            })
            .on('end', () => {
                // Sorting logic based on query parameters
                if (sortBy === 'price') {
                    laptops.sort((a, b) => order === 'asc' ? a.Price - b.Price : b.Price - a.Price);
                } else if (sortBy === 'rating') {
                    laptops.sort((a, b) => order === 'asc' ? a.Rating - b.Rating : b.Rating - a.Rating);
                } else if (sortBy === 'brand') {
                    laptops.sort((a, b) => order === 'asc' ? a.Brand.localeCompare(b.Brand) : b.Brand.localeCompare(a.Brand));
                }

                resolve(laptops);
            })
            .on('error', (err) => {
                reject(err);
            });
    });
}

module.exports = filterLaptops;
