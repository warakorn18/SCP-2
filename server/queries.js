const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: '191.191.2.179',
  database: 'Totle-2nd-Mask',
  password: 'Ab123456',
  port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM cpk_data ORDER BY id DESC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  module.exports = {
    getUsers,
  }