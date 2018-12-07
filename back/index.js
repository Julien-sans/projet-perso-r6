const RainbowSixApi = require('rainbowsix-api-node');
const express = require('express');
const app = express();
const port = 5000;
const statsRouter = require('./routes/stats');
const R6 = new RainbowSixApi();

//let username = '<username here>';
let platform = 'ps4';

app.get('/api/stats/:username', (req, res) => {
  const username = req.params.username;

R6.stats(username, platform).then(response => {
    res.send(response);
  }).catch(error => {
    console.error(error)
  });
});

//Get stats on the user on that platform
/*app.get('/api/stats/persos/:username', (req, res) => {
  const username = req.params.username;

  R6.stats(username, platform, true).then(response => {
    res.json(response);
  }).catch(error => {
    console.error(error)
  });

});*/

app.use('/api/stats', statsRouter)

app.listen(port, (err) => {
  if (err) {
    throw new Error('Erreur')
  }
  console.log(`Server is listening on port ${port}`);
});
