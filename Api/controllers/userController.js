const pool = require('../config/dbConfig');

const getUsers = async (req, res) => {
    try {
      const results = await pool.query('SELECT * FROM users');
      res.status(200).json(results.rows);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error: ' + err.message);
    }
  };


module.exports = {
  getUsers,
};
