const express = require('express');
var app = express();
const path = require('path');
//var morgan = require('morgan'); //http request logger

var port =process.env.PORT || 8080;
var http=require('http').Server(app);
http.listen(port);

const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'fav.png')));

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, 'public')))

//app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

/*------routes Define---------------------*/
const routes = require('./routes/index.js');
//const Users = require('./routes/user.js');
//const Book = require('./routes/Book.js');

app.use('/', routes);
//app.use('/dashboard', Users);
//app.use('/books', Book);

/*---------routes end---------------------*/


