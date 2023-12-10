const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const client = require('../utils/database');

const jwtSecret = 'ilovemypizza!';
const lifetimeJwt = 24 * 60 * 60 * 1000; // in ms : 24 * 60 * 60 * 1000 = 24h

const saltRounds = 10;

client.query('SELECT * from users', (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  // eslint-disable-next-line no-unused-expressions
  client.end;
});

async function login(username, password) {
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
}

async function register(email, username, password) {
  const userFound = readOneUserFromUsername(username);
  if (userFound) return undefined;

  // eslint-disable-next-line no-undef
  await createOneUser(email, username, password);

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
}

function readOneUserFromUsername(username) {
  let user = null;
  client.query('SELECT id_user from users where username = $1', [username], (err, res) => {
    if (!err) {
      if (res.rows.length > 0) {
        // eslint-disable-next-line prefer-destructuring
        user = res.rows[0];
        console.log(user);
        // Do something with the user data if needed
      } else {
        console.log('User not found');
      }
    } else {
      console.error(err.message);
    }
    // Properly end the database connection
    client.end();
  });
  if (user == null) return undefined;
  return user;
}

async function createOneUser(email, username, password) {
  let createdUser;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  client.query('INSERT INTO users(id_user, email, username, password) VALUES($1, $2, $3, $4)', [getNextId(), email, username, hashedPassword], (err, res) => {
    if (!err) {
      if (res.rows.length > 0) {
        // eslint-disable-next-line prefer-destructuring
        createdUser = {
          id: getNextId(),
          email,
          username,
          password: hashedPassword,
        };
        console.log(createdUser);
        // Do something with the user data if needed
      } else {
        console.log('User not found');
      }
    } else {
      console.error(err.message);
    }
    // Properly end the database connection
    client.end();
  });

  return createdUser;
}

function getNextId() {
  let nextId = 0;
  client.query('SELECT MAX(id_user) AS maxId FROM users', (err, res) => {
    if (!err) {
      if (res.rows.length > 0) {
        const maxId = res[0].maxId || 0;

        // Increment the maximum ID to get the next ID
        nextId = maxId + 1;
        console.log(nextId);
        // Do something with the user data if needed
      } else {
        console.log(nextId, 'Should be 0');
      }
    } else {
      console.error(err.message);
    }
    // Properly end the database connection
    client.end();
  });
  return nextId;
}

module.exports = {
  login,
  register,
  readOneUserFromUsername,
};
