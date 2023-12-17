const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:8080', 'https://e-baron.github.io', 'https://flaviu-bilic-vinci.github.io'],
}; // 'https://e-baron.github.io'   Should we delete this?

const authsRouter = require('./routes/auths');
const rankingRouter = require('./routes/ranking');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors(corsOptions));

app.use('/auths', cors(corsOptions), authsRouter);
app.use('/ranking', rankingRouter);

module.exports = app;
