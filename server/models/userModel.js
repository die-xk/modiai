const pool = require('../db');

const userModel = {
  createUser: async (userData) => {
    const [result] = await pool.promise().execute(
      'INSERT INTO users (id, email, display_name) VALUES (?, ?, ?)',
      [userData.uid, userData.email, userData.displayName]
    );
    return result;
  },

  getUserById: async (uid) => {
    const [rows] = await pool.promise().execute(
      'SELECT * FROM users WHERE id = ?',
      [uid]
    );
    return rows[0];
  },

  updateSubscription: async (uid, status, endDate) => {
    const [result] = await pool.promise().execute(
      'UPDATE users SET subscription_status = ?, subscription_end_date = ? WHERE id = ?',
      [status, endDate, uid]
    );
    return result;
  }
};

module.exports = userModel;
