const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Use CORS only in development (optional)
if (process.env.NODE_ENV !== 'production') {
  app.use(cors({
    origin: 'http://localhost:3000',
  }));
}

// Enable JSON parsing for POST requests
app.use(express.json());

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, '../build')));

// API Endpoint
app.post('/submit', (req, res) => {
  const { name, phone, email, message } = req.body;

  if (!name || !phone || !email || !message) {
    return res.status(400).send({ message: 'All fields are required.' });
  }

  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).send({ message: 'Please enter a valid 10-digit phone number.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send({ message: 'Please enter a valid email address.' });
  }

  console.log('Valid contact submission:', { name, phone, email, message });

  res.status(200).send({ message: 'Your message has been submitted successfully.' });
});

// Fallback: serve index.html for any other routes (React Router support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// Start server on the given port or 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
