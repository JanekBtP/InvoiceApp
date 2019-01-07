var express = require('express');
const { printQueryResults } = require('./utils');
const sqlite3 = require('sqlite3');


const db = new sqlite3.Database('./db.sqlite');

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

