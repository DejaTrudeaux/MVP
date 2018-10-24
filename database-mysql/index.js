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
      // console.log(results);
    }
  });
};

const save = (obj, callback) => {
  const queryStr = `INSERT into items (id, image, petname, username) values (${null}, '${obj.image}', '${obj.petname}', '${obj.username}')`;
  connection.query(queryStr, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(results);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.save = save;
