const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { runQuery, pool } = require('../utils/database');

const jwtSecret = 'ilovemypizza!';
const lifetimeJwt = 24 * 60 * 60 * 1000; // in ms : 24 * 60 * 60 * 1000 = 24h

const saltRounds = 10;
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

const membersDB = {
   login: async (username, password) => {
    const userFound = readOneUserFromUsername(username);
    if (!userFound) return undefined;

    const passwordMatch = await bcrypt.compare(password, userFound.password);
    if (!passwordMatch) return undefined;

    const token = jwt.sign(
      { username }, // session data added to the payload (payload : part 2 of a JWT)
      jwtSecret, // secret used for the signature (signature part 3 of a JWT)
      { expiresIn: lifetimeJwt }, // lifetime of the JWT (added to the JWT payload)
    );

    const authenticatedUser = {
      username,
      token,
    };

    return authenticatedUser;
  },

  readOneUserFromUsername: async (username) => {
    console.log('readOne - START');
    const query = 'SELECT id_user FROM users WHERE username = $1';
    const values = [username];
    const client = await pool.connect();
    try {
      const result = await client.query(query, values);
      if (result.length > 0) {
        const userId = result[0].id_user;
        console.log(`User ID for ${username}: ${userId}`);
      } else {
        console.log(`User not found: ${username}`);
      }
    } finally {
      console.log('readOne - finally');
      client.release();
    }
    console.log('readOne - pool end -');
  },

  getNextId: async () => {
    console.log('getNext - START');
    let nextId = 0;

    const query = 'SELECT MAX(id_user) AS maxId FROM users';
    const client = await pool.connect();
    try {
      const result = await client.query(query);
      console.log(result);
      console.log('cos tam: ', result.rows[0].maxId);
      console.log('result.rows:', result.rows);
      console.log('result.rows[0]:', result.rows[0]);
      console.log('result.rows[0].maxid:', result.rows[0].maxId);
      const maxId = result.rows[0].maxid || 0;
      if (result.rows[0].maxid === null) {
        console.log(result);
        console.log('id = 0');
        return nextId;
      }
      // Increment the maximum ID to get the next ID
      nextId = maxId + 1;
      console.log(nextId);
    } finally {
      client.release();
    }
    return nextId;
  },

  register: async (email, username, password) => {
    console.log('xd');
    const userFound = await membersDB.readOneUserFromUsername(username);
    if (userFound) return undefined;
    console.log('register - po readOneUserFromUsername');

    // eslint-disable-next-line no-undef
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const insert = `INSERT INTO users(id_user, email, username, password)
    VALUES ($1, $2, $3, $4)`;

    const id = await membersDB.getNextId();
    console.log('register - po getNextId');
    const client = await pool.connect();
    try {
      const res = await client.query(insert, [
        id,
        email,
        username,
        hashedPassword,
      ]);
      console.log(res.rows[0]);

      const token = jwt.sign(
        { username }, // session data added to the payload (payload : part 2 of a JWT)
        jwtSecret, // secret used for the signature (signature part 3 of a JWT)
        { expiresIn: lifetimeJwt }, // lifetime of the JWT (added to the JWT payload)
      );
    
      const authenticatedUser = {
        username,
        token,
      };
      return authenticatedUser;
    } finally {
      client.release();
    }
  },
};
module.exports = {
  membersDB,
};
