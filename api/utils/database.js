/* eslint-disable no-shadow */
const pg = require('pg');

// or native libpq bindings
// var pg = require('pg').native

const conString = 'postgres://sbaaarjv:v5f5Bo3IHXHlmCcM0h3gxdSctp888y4v@surus.db.elephantsql.com/sbaaarjv'; // Can be found in the Details page
const client = new pg.Client(conString);
// eslint-disable-next-line consistent-return
client.connect((err) => {
  if (err) {
    return console.error('could not connect to postgres', err);
  }
  // eslint-disable-next-line consistent-return
  client.query('SELECT NOW() AS "theTime"', (err, result) => {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});

client.query('SELECT * from users', (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  // eslint-disable-next-line no-unused-expressions
  client.end;
});

module.exports = client;
