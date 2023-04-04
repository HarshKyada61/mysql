const { faker } = require('@faker-js/faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Hh061221@',
    database : 'join_us',
});

// var q = 'SELECT COUNT(*) AS total FROM users';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].total);

// });




// var data = [];
// for(var i = 0; i < 500; i++){
//     data.push([
//         faker.internet.email(),
//         faker.date.past()
//     ]);
// }
 
 
var q = 'SELECT CASE WHEN email LIKE "%yahoo.com" THEN "yahoo" WHEN email LIKE "%gmail.com" THEN "gmail.com" WHEN email LIKE "%hotmail.com" THEN "hotmail" END AS provider,COUNT(*) FROM users GROUP BY provider ';
 
connection.query(q, function(err, result) {
  console.log(err);
  console.log(result);
});

connection.end();
