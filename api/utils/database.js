/* eslint-disable no-shadow */
const { Pool } = require('pg');

const conString = 'postgres://sbaaarjv:v5f5Bo3IHXHlmCcM0h3gxdSctp888y4v@surus.db.elephantsql.com/sbaaarjv'; // Can be found in the Details page

// Create a connection pool
const pool = new Pool({
  connectionString: conString,
});
/*
// Example query function using the connection pool
async function runQuery() {
  const client = await pool.connect();
  try {
    // Example query
    const result = await client.query('SELECT NOW() AS "theTime"');
    console.log(result.rows[0].theTime);
    // Additional query
    const usersResult = await client.query('SELECT * from users');
    console.log(usersResult.rows);
  } finally {
    // Release the client back to the pool
    client.release();
  }
}

// Run the query
runQuery()
  .catch((err) => console.error('Error executing query:', err))
  .finally(() => pool.end());
*/
module.exports = { pool };
