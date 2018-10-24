const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const items = require('../database-mysql');

const app = express();

// UNCOMMENT FOR ANGULAR
app.use(express.static(path.join(__dirname, '/../angular-client')));
app.use(express.static(path.join(__dirname, '/../node_modules')));

// untouched
app.get('/items', (req, res) => {
  items.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/items', (req, res) => {
  req.on('data', (chunk) => {
    const obj = JSON.parse(chunk);
    //console.log(obj);
    items.save(obj, (response) => {
      console.log(response, 'backfromDB');
      res.status(201);
      res.send(response);
    });
  });
});

// heroku dynamic port
app.listen(process.env.PORT || 3000, () => {
  console.log('listening on port 3000!');
});
