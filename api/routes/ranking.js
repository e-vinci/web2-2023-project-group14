const express = require('express');
// const path = require('node:path');

const { rankingDB } = require('../models/ranking');

const router = express.Router();

// const jsonDbPath = path.join(__dirname, '/../data/scores.json');

// get ranking
router.get('/', async (req, res) => {
  /*
  const scores = parse(jsonDbPath, SCORES);
  orderedLeaderboard = [...scores].sort((a, b) => b.score - a.score);
  */
  const ranking = await rankingDB.getAllRanking();
  return res.json(ranking);
});

/* Add ranking after won game */
router.post('/addRanking', async (req, res) => {
  const username = req.body;

  console.log(username);
  if (!username) return res.sendStatus(400); // 400 Bad Request

  const updatedRankingUser = await rankingDB.addRanking(username);

  if (!updatedRankingUser) return res.sendStatus(409); // 409 Conflict

  return res.json(updatedRankingUser);
});

/* Remove ranking after lost game */
router.post('/removeRanking', async (req, res) => {
  const username = req.body;

  console.log(username);
  if (!username) return res.sendStatus(400); // 400 Bad Request

  const updatedRankingUser = await rankingDB.removeRanking(username);

  if (!updatedRankingUser) return res.sendStatus(409); // 409 Conflict

  return res.json(updatedRankingUser);
});
module.exports = router;
