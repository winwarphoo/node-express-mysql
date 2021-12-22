const express = require('express');
const res = require('express/lib/response');
const app = express();

app.set('view engine', 'ejs');

function getConnection() {
  const mysql = require('mysql');
  return mysql.createConnection({
    host: 'localhost',
    user: 'cybermissions',
    password: 'cybermissions',
    database: 'test_database'
  });
}

app.get("/list", function(req, res, next) {
  const con = getConnection();
  con.connect((err) => {
    if (err) {
      console.log(`Connection Error : ${err.stack}`);
      return;
    }
    console.log("Connection Success");
  });
  con.query(
    "SELECT * FROM country",
    (err, results) => {
      res.render('list', {countries: results});
    }
  );

  // res.render('hello', {name: "Phoo"});
});


app.get("/", function(req, res, next) {

});

app.listen('3001', function (){
  console.log("Listening 3001")
});