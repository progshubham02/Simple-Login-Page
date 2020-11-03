var mysql = require('mysql');
var util = require('util');

var pool = mysql.createPool({multipleStatements: true,
  connectionLimit : 100,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
  charset: 'UTF8MB4_GENERAL_CI'
});


module.exports = pool;
