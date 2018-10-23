/* eslint key-spacing: 0 */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'test',
});

const selectAll = (callback) => {
  console.log('received get req');
  connection.query('SELECT * FROM items', (err, results, fields) => {
    if (err) {
      callback(err, null);
      console.log('selectall error');
    } else {
      callback(null, results);
      console.log('good going it works');
    }
  });
};

module.exports.selectAll = selectAll;
