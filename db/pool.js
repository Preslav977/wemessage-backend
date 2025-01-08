require("dotenv").config();

const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: process.env.TEST_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
