const RainbowSixApi = require('rainbowsix-siege-api');
const express = require('express');
const app = express();
const port = 5000;
const statsRouter = require('./routes/stats');
const R6 = new RainbowSixApi();

app.get('/api/stats/:userId', (req, res) => {
    const userId = req.params.userId;
    try{
        R6.stats(userId).then(response => {
            res.send(response);
        }).catch(error => {
            console.error(error)
        });
    }catch(error){
        console.error(error);
    };
});

app.use('/api/stats', statsRouter)

app.listen(port, (err) => {
  if (err) {
    throw new Error('Erreur')
  }
  console.log(`Server is listening on port ${port}`);
});
