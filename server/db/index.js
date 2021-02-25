const { Pool } = require('pg')

// const config = require('../config')

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "contactdb",
    password: "er5jk8",
    port: 5432,
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}