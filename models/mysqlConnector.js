// Load module
var mysql = require('mysql');

// Initialize pool for local

var pool      =    mysql.createPool({
    connectionLimit : 1000,
    host     : '127.0.0.1',
    user     : 'root',
	password : '',
    database : 'bansach',
    debug    :  false
});

// Initialize pool for heroku host
// var pool      =    mysql.createPool({
//     connectionLimit : 1000,
//     host     : 'db4free.net',
//     user     : 'luanpham2',
//     password : 'luan1997.',
//     database : 'bookstore_db',
//     debug    :  false
// });


// Initialize pool for freemysql host
// var pool      =    mysql.createPool({
//     connectionLimit : 1000,
//     host     : 'sql12.freemysqlhosting.net',
//     user     : 'sql12243562',
//     password : 'SmVukUbc9u',
//     database : 'sql12243562',
//     debug    :  false
// });

module.exports = pool;