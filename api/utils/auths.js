const jwt = require('jsonwebtoken');
const { readOneUserFromUsername } = require('../models/users');

const jwtSecret = 'ilovemypizza!';

const authorize = (req, res, next) => {
  const token = req.get('authorization');
  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, jwtSecret);
    console.log('decoded', decoded);
    const { username } = decoded;

    const existingUser = readOneUserFromUsername(username);

    if (!existingUser) return res.sendStatus(401);

    req.user = existingUser; // request.user object is available in all other middleware functions
    return next();
  } catch (err) {
    console.error('authorize: ', err);
    return res.sendStatus(401);
  }
};

const isAdmin = (req, res, next) => {
  const { username } = req.user;

  if (username !== 'admin') return res.sendStatus(403);
  return next();
};

// external API to check email validity
async function externalEmailApiVerification (email) {
  try {
    const requestBody = new URLSearchParams();
    requestBody.append('email', email);
    const response = await fetch('https://disify.com/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: requestBody.toString()
    });
    if (!response.ok) {
      return { error: "Email validation failed" };
    } else {
      const responseData = await response.json(); // parses the json response to javascript
      return responseData;
    }
  } catch (err) {
    console.error('auths::error: ', err);
    return json({ error: 'Internal server error' });
  }
}

module.exports = { authorize, isAdmin, externalEmailApiVerification };
