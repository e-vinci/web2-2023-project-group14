/* eslint-disable max-len */
const express = require('express');
const { membersDB } = require('../models/users');
const { externalEmailApiVerification } = require('../utils/auths');

const router = express.Router();

/* Register a user */
router.post('/register', async (req, res) => {
  const userData = req.body;
  const email = userData.newUserEmail;
  const username = userData.newUserName;
  const password = userData.newUserPassword;
  // eslint-disable-next-line prefer-destructuring
  const passwordConf = userData.passwordConf;

  if (!email || !password || !username) return res.sendStatus(400); // 400 Bad Request
  if (password !== passwordConf) return res.sendStatus(400); // 400 Bad Request

  const response = await externalEmailApiVerification(email);

  if (response.format === false) {
    // eslint-disable-next-line max-len
    // If this condition is true, the email verification failed, we got no answear, we don t save the user
    return res.sendStatus(400); // Bad email
  }
  const authenticatedUser = await membersDB.register(email, username, password);

  if (!authenticatedUser) return res.sendStatus(409); // 409 Conflict

  return res.json(authenticatedUser);
});

/* Login a user */
router.post('/login', async (req, res) => {
  const userData = req.body;
  const username = userData.newUserName;
  const password = userData.newUserPassword;

  if (!username || !password) return res.sendStatus(400); // 400 Bad Request

  const authenticatedUser = await membersDB.login(username, password);

  if (!authenticatedUser) return res.sendStatus(401); // 401 Unauthorized

  return res.json(authenticatedUser);
});

router.delete('/deleteUser/:username', async (req, res) => {
  const { username } = req.params;

  // Validate the input
  if (!username) {
    return res.status(400).json({ error: 'Username is required in the request parameters' });
  }

  try {
    // Perform the deletion logic
    const deletedUser = await membersDB.deleteUser(username);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Respond with a success message
    return res.json({ message: 'User account deleted successfully' });
  } catch (error) {
    console.error('Error deleting user account:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
