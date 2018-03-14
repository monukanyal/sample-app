/*
  #####  ### ##### #### ####   ###   ###  ###  ##### #####
  #     #    #     #    #   # #   # #    #   # #       #
  ###    ##  ###   ###  ####  #####  ##  #   # ###     #
  #        # #     #    #  #  #   #    # #   # #       #
  ##### ###  #     #### #   # #   # ###   ###  #       #
*/

const path = require('path');
var morgan = require('morgan'); //http request logger
const express = require('express');
var app = express();
var port =process.env.PORT || 8080;
app.listen(port);

const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

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
app.use('/', routes);
/*---------routes end---------------------*/
console.log("Express server listening on port:" + port);

