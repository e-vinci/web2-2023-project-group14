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

module.exports = router;
