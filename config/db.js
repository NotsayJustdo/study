const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'Jack',
  password : 'yalesuperman',
  database : 'study'
});

module.exports = connection;