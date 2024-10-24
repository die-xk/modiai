require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection setup
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Example route to get data from the database
app.get('/api/data', (req, res) => {
  pool.query('SELECT * FROM Data', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(results);
  });
});

// Test database connection
app.get('/api/test-connection', (req, res) => {
  pool.query('SELECT 1', (err) => {
    if (err) {
      console.error('Database connection error:', err);
      return res.status(500).json({ error: 'Database connection failed' });
    }
    res.json({ message: 'Database connection successful' });
  });
});

// Save form data endpoint
app.post('/api/save-form-data', (req, res) => {
  const {
    userId,
    industry,
    otherIndustry,
    departments,
    goals,
    companySize,
    country,
    otherCountry
  } = req.body;

  const query = `
    INSERT INTO user_form_data (user_id, industry, other_industry, departments, goals, company_size, country, other_country)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [userId, industry, otherIndustry, JSON.stringify(departments), JSON.stringify(goals), companySize, country, otherCountry];

  pool.query(query, values, (err, results) => {
    if (err) {
      console.error('Error saving form data:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.status(201).json({ message: 'Form data saved successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
