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
      if (result.rowCount === 0) {
        console.log('No users registered');
        return undefined;
      }
      // Increment the maximum ID to get the next ID
      return result.rows;
    } finally {
      client.release();
    }
  },

  addRanking: async (username) => {
    const userFound = await membersDB.readOneUserFromUsername(username.username);
    if (!userFound) return undefined;
    const query = 'UPDATE users SET ranking_points = ranking_points + 5, wins = wins + 1 WHERE username = $1';
    const values = [username.username];

    const client = await pool.connect();
    try {
      const res = await client.query(query, values);

      return res;
    } finally {
      client.release();
    }
  },

  removeRanking: async (username) => {
    const userFound = await membersDB.readOneUserFromUsername(username.username);
    if (!userFound) return undefined;
    const update = 'UPDATE users SET ranking_points = ranking_points - 5, loses = loses + 1 WHERE username = $1';
    const values = [username.username];

    const client = await pool.connect();
    try {
      const res = await client.query(update, values);

      return res;
    } finally {
      client.release();
    }
  },
  deletePlayer: async (username) => {
    const client = await pool.connect();
    try {
      const userFound = await membersDB.readOneUserFromUsername(username);
      if (!userFound) return undefined;

      const query = 'DELETE FROM users WHERE username = $1';
      const values = [username];

      const res = await client.query(query, values);
      console.log(`${username} has been deleted from the database`);

      return res;
    } catch (error) {
      console.error('Error in deletePlayer:', error.message);
      throw error;
    } finally {
      client.release();
    }
  },
};

module.exports = {
  rankingDB,
};
