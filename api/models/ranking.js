const { pool } = require('../utils/database');
const { membersDB } = require('./users');
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

  addRanking: async (username) => {
    const userFound = await membersDB.readOneUserFromUsername(username.username);
    if (!userFound) return undefined;
    console.log('username:', username.username);
    const query = 'UPDATE users SET ranking_points = ranking_points + 5, wins = wins + 1 WHERE username = $1';
    const values = [username.username];

    const client = await pool.connect();
    try {
      const res = await client.query(query, values);
      console.log(res.rows[0]);

      return res;
    } finally {
      client.release();
    }
  },

  removeRanking: async (username) => {
    const userFound = await membersDB.readOneUserFromUsername(username.username);
    if (!userFound) return undefined;
    console.log('username:', username.username);
    const update = 'UPDATE users SET ranking_points = ranking_points - 5, loses = loses + 1 WHERE username = $1';
    const values = [username.username];

    const client = await pool.connect();
    try {
      const res = await client.query(update, values);
      console.log(res.rows[0]);

      return res;
    } finally {
      client.release();
    }
  },
};

module.exports = {
  rankingDB,
};
