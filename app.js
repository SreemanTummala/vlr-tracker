const express = require('express');
const app = express();
const port = 3000; // Choose the port you want to run your server on

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.render('index.html')
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});