// Load module
var mysql = require('mysql');

// Initialize pool for local

var pool      =    mysql.createPool({
    connectionLimit : 50,
    host     : '127.0.0.1',
    user     : 'root',
    database : 'bansach',
    debug    :  false
});


// Initialize pool for heroku host

// var pool      =    mysql.createPool({
//     connectionLimit : 20,
//     host     : 'db4free.net',
//     user     : 'luanpham',
//     password : 'luan1997.',
//     database : 'db_celebrities',
//     debug    :  false
// });

module.exports = pool;