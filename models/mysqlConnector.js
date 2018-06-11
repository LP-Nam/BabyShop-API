// Load module
var mysql = require('mysql');

// Initialize pool for local

var pool      =    mysql.createPool({
    connectionLimit : 1000,
    host     : '127.0.0.1',
    user     : 'root',
	password : 'huunhuan',
    database : 'bansach',
    debug    :  false
});

// Initialize pool for heroku host

// var pool      =    mysql.createPool({
//     connectionLimit : 50,
//     host     : 'db4free.net',
//     user     : 'luanpham2',
//     password : 'luan1997.',
//     database : 'bookstore_db',
//     debug    :  false
// });

module.exports = pool;