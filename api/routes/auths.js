const express = require('express');
const { register, login } = require('../models/users');
const {externalEmailApiVerification } = require('../utils/auths');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const router = express.Router();

// register a user (test email with external API) TODO later with database
router.post('/registerTestEmailAPI', async (req, res) => {
  const userData = req.body;    // The data the user gave in the register form
  const emailToValidate = userData.newUserEmail;   // Here is the email we are checking with the external API

  try {
    const response = await externalEmailApiVerification(emailToValidate);
    if (response.error) {
      // If this condition is true, the email verification failed, we got no answear, we don t save the user
      res.status(400).json(response);
    } else {
      /* So here we check the answear from the API,
      we check if the email is valid, if it is, 
      we check if we can save the user and send a confirmation to the front end!
      */
      res.json(response); // Here we just send the the object from the external api as a test, this must be changed
    }
  } catch (err) {
    console.error('Registe::error: ', err);
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
