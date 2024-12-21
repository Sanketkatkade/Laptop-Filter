const express = require('express');
const app = express();
const port = 3000;
const laptopRoutes = require('./routes/laptopRoutes');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files (optional, if you want to serve HTML, CSS, JS)
app.use(express.static('public'));

// Use the laptop routes
app.use('/laptops', laptopRoutes);

// Route to render the index page
app.get('/', (req, res) => {
    res.render('index'); // Render the HTML page with filtered laptops
});

// Start the server
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
