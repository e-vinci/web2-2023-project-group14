const { pool } = require('../utils/database');
/*
client.query('SELECT * from users', (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  // eslint-disable-next-line no-unused-expressions
  client.end;
});
*/

const rankingDB = {
  getAllRanking: async () => {
    const query = 'SELECT username, ranking_points, wins, loses FROM users ORDER BY ranking_points DESC, username ASC';
    const client = await pool.connect();
    try {
      const result = await client.query(query);
      console.log('result.rows: ', result.rows);
      if (result.rowCount === 0) {
        console.log('No users registered');
        return undefined;
      }
      // Increment the maximum ID to get the next ID
      console.log('lenght: ', result.rows.length);
      return result.rows;
    } finally {
      client.release();
    }
  },

};

module.exports = {
  rankingDB,
};
