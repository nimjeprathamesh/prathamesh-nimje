// netlify/functions/api.js
const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

// Import your routes
// Adjust the path based on your project structure
const FeedbackRoute = require('../../routes/feedbackRoute'); // Adjust path as needed

const app = express();

// Middleware
app.use(cors({
    origin: '*', // Or specify your frontend URL: 'https://your-site.netlify.app'
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Your existing routes
app.use("/api", FeedbackRoute);

// Add any other routes here
// app.use("/api/other", OtherRoute);

// Test route
app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working!' });
});

// Export as serverless function
exports.handler = serverless(app);