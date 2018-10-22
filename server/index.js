const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const items = require('../database-mysql');
const dogs = require('../database-mysql');
const cats = require('../database-mysql');

const app = express();

// UNCOMMENT FOR ANGULAR
app.use(express.static(path.join(__dirname, '/../angular-client')));
app.use(express.static(path.join(__dirname, '/../node_modules')));

// untouched
// app.get('/items', (req, res) => {
//   items.selectAll((err, data) => {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.get('/dogs', (req, res) => {
  dogs.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/cats', (req, res) => {
  cats.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

// heroku dynamic port
app.listen(process.env.PORT || 3000, () => {
  console.log('listening on port 3000!');
});
