/* eslint-disable max-len */
const express = require('express');
const { membersDB } = require('../models/users');
const { externalEmailApiVerification } = require('../utils/auths');

const router = express.Router();

// register a user (test email with external API) TODO later with database
router.post('/registerTestEmailAPI', async (req, res) => {
  const userData = req.body;// The data the user gave in the register form
  // eslint-disable-next-line max-len, max-len, max-len
  const emailToValidate = userData.newUserEmail; // Here is the email we are checking with the external API

  try {
    const response = await externalEmailApiVerification(emailToValidate);
    if (response.error) {
      // eslint-disable-next-line max-len
      // If this condition is true, the email verification failed, we got no answear, we don t save the user
      res.status(400).json(response);
    } else {
      /* So here we check the answear from the API,
      we check if the email is valid, if it is,
      we check if we can save the user and send a confirmation to the front end!
      */
      // eslint-disable-next-line max-len
      res.json(response); // Here we just send the the object from the external api as a test, this must be changed
    }
  } catch (err) {
    console.error('Registe::error: ', err);
  }
});

/* Register a user */
router.post('/register', async (req, res) => {
  const userData = req.body;
  const email = userData.newUserEmail;
  const username = userData.newUserName;
  const password = userData.newUserPassword;

  console.log(email, username, password);
  if (!email || !password || !username) return res.sendStatus(400); // 400 Bad Request

  const authenticatedUser = await membersDB.register(email, username, password);

  if (!authenticatedUser) return res.sendStatus(409); // 409 Conflict

  return res.json(authenticatedUser);
});

/* Login a user */
router.post('/login', async (req, res) => {
  const userData = req.body;
  const username = userData.newUserName;
  const password = userData.newUserPassword;

  console.log(username, password);
  if (!username || !password) return res.sendStatus(400); // 400 Bad Reques

  const authenticatedUser = await membersDB.login(username, password);

  if (!authenticatedUser) return res.sendStatus(401); // 401 Unauthorized

  return res.json(authenticatedUser);
});

router.delete('/delete2/:username', async (req, res) => {
  const { username } = req.params;
  console.log('username: ', { username });

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
