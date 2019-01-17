var express = require('express');
//const { printQueryResults } = require('./utils');
//const sqlite3 = require('sqlite3');
const mysql = require('mysql');


//const db = new sqlite3.Database('./db.sqlite');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Tajnehaslo345",
    database: "mydb"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
      var sql = "INSERT INTO USERS (first_name, last_name, email, password) VALUES ('Marie', 'Red','mr.test@example.com','secretpassword365')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
 
  con.query("SELECT * FROM USERS", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
    });

var app = express();



app.use(express.static('public'));

app.get('/',function(req, res, next){
    res.render('index');
});


app.listen(8000, function(){
    console.log('App running on port 8000');
});



















//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
//var ejs = require('ejs');
//var engine = require('ejs-mate');
//var session = require('express-session');
//var mongoose = require('mongoose');
//var MongoStore = require('connect-mongo')(session);


//mongoose.connect('mongodb://localhost/invoiceappdb');


//app.engine('ejs', engine);
//app.set('view engine', 'ejs');
//app.use(cookieParser());
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());

//app.use(session({
//    secret: 'thisissecrettest',
  //  resave: false,
    //saveUninitialized: false,
    //store: new MongoStore({
      //  mongooseConnection: mongoose.connection,
       // useNewUrlParser: true
   // })
//}));

