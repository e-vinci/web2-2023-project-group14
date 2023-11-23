const express = require('express');
const { register, login } = require('../models/users');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const router = express.Router();

// register a user (test email API) TODO later with database
router.post('/registerTestEmailAPI', async (req, res) => {
  const userData = req.body;
  const newEmail = userData.newUserEmail;

  try {
    const requestBody = new URLSearchParams();
    requestBody.append('email', newEmail);

    const response = await fetch('https://disify.com/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: requestBody.toString()
    });

    if (response.ok) {
      const responseData = await response.json(); // parses the json response to javascript
      // Handle the response data from the external API
      if (responseData.format === true && responseData.disposable === false && responseData.dns === true && responseData.whitelist === true){
        console.log("The email is valid");
      // Now we can also save the whole user in the database TODO
      } else {
        console.log("The email is invalid!");
      }
      // Send the response back to the client
      res.status(200).json({ message: 'Email verification successful (or user got saved if correct, idk don t ask me, ask Dimitry brother XD', responseData });
    } else {
      // Handle unsuccessful response (status other than 200 OK)
      console.error('Request failed with status:', response.status);
      res.status(response.status).json({ error: 'Failed to validate email' });
    }

    // Handle response...
  } catch (err) {
    console.error('auths::error: ', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


/* Register a user */
router.post('/register', async (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  if (!username || !password) return res.sendStatus(400); // 400 Bad Request

  const authenticatedUser = await register(username, password);

  if (!authenticatedUser) return res.sendStatus(409); // 409 Conflict

  return res.json(authenticatedUser);
});

/* Login a user */
router.post('/login', async (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  if (!username || !password) return res.sendStatus(400); // 400 Bad Reques

  const authenticatedUser = await login(username, password);

  if (!authenticatedUser) return res.sendStatus(401); // 401 Unauthorized

  return res.json(authenticatedUser);
});

module.exports = router;
