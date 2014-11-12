var mysql = require('mysql');
var prop = require('properties-parser').read("mysql.properties");
var connection = mysql.createConnection({
    host: prop["db.host"] || 'localhost',
    user: prop["db.user"] || 'yogesh',
    password: prop["db.password"] || 'yogesh12',
    port: prop["db.port"] || '3306'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.info('connected as id ' + connection.threadId);
});

console.info("Emptying np_test database");

connection.query('DROP DATABASE IF EXISTS np_test;', function (err) {
    if (err) throw err;
    connection.query('CREATE DATABASE np_test;', function (err) {
        if (err) throw err;
        console.info('DB empty');
        connection.end();
    })


});
