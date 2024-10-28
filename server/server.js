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

// Add this test route to verify database connection
app.get('/api/test-db', async (req, res) => {
  try {
    const [result] = await pool.promise().query('SELECT 1');
    res.json({ message: 'Database connection successful', result });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ 
      error: 'Database connection failed', 
      details: error.message 
    });
  }
});

// Save form data endpoint
app.post('/api/save-form-data', async (req, res) => {
  console.log('Received request body:', req.body); // Debug log

  const { userId } = req.body;

  if (!userId) {
    console.log('Missing userId in request'); // Debug log
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    // First, get existing data
    const [existing] = await pool.promise().query(
      'SELECT * FROM user_form_data WHERE user_id = ?',
      [userId]
    );

    console.log('Existing record:', existing); // Debug log

    let query;
    let values;

    if (existing.length > 0) {
      // For updates, only update the fields that are provided
      const updates = [];
      const updateValues = [];

      // Helper function to add update fields
      const addUpdateField = (field, value) => {
        if (value !== undefined) {  // Changed condition
          updates.push(`${field} = ?`);
          updateValues.push(value);
        }
      };

      // Add all possible fields
      if (req.body.industry) addUpdateField('industry', req.body.industry);
      if (req.body.otherIndustry) addUpdateField('other_industry', req.body.otherIndustry);
      if (req.body.departments) addUpdateField('departments', JSON.stringify(req.body.departments));
      if (req.body.goals) addUpdateField('goals', JSON.stringify(req.body.goals));
      if (req.body.companySize) addUpdateField('company_size', req.body.companySize);
      if (req.body.country) addUpdateField('country', req.body.country);
      if (req.body.otherCountry) addUpdateField('other_country', req.body.otherCountry);
      
      // AI Readiness fields - handle these separately
      if (req.body.aiFamiliarity !== undefined) addUpdateField('ai_familiarity', req.body.aiFamiliarity);
      if (req.body.usingAiTools !== undefined) addUpdateField('using_ai_tools', req.body.usingAiTools);
      if (req.body.aiAreas) addUpdateField('ai_areas', JSON.stringify(req.body.aiAreas));
      if (req.body.otherAiArea) addUpdateField('other_ai_area', req.body.otherAiArea);

      if (updates.length > 0) {
        query = `UPDATE user_form_data SET ${updates.join(', ')} WHERE user_id = ?`;
        values = [...updateValues, userId];
        console.log('Update query:', query); // Debug log
        console.log('Update values:', values); // Debug log
      } else {
        return res.status(400).json({ error: 'No fields to update' });
      }
    } else {
      // For new entries
      query = `INSERT INTO user_form_data (
        user_id, industry, other_industry, departments, goals,
        company_size, country, other_country, ai_familiarity,
        using_ai_tools, ai_areas, other_ai_area
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      values = [
        userId,
        req.body.industry || null,
        req.body.otherIndustry || null,
        req.body.departments ? JSON.stringify(req.body.departments) : null,
        req.body.goals ? JSON.stringify(req.body.goals) : null,
        req.body.companySize || null,
        req.body.country || null,
        req.body.otherCountry || null,
        req.body.aiFamiliarity || null,
        req.body.usingAiTools || null,
        req.body.aiAreas ? JSON.stringify(req.body.aiAreas) : null,
        req.body.otherAiArea || null
      ];
    }

    const [result] = await pool.promise().query(query, values);
    console.log('Query result:', result); // Debug log

    res.status(200).json({ 
      message: existing.length > 0 ? 'Form data updated successfully' : 'Form data saved successfully',
      result: result
    });

  } catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      stack: error.stack,
      code: error.code,
      sqlMessage: error.sqlMessage
    });
    res.status(500).json({ 
      error: 'Internal server error', 
      details: error.message,
      sqlMessage: error.sqlMessage 
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
