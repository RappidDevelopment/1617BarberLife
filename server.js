/**
  * General setup of the web application.
  * Import express and other stand libraries
  * to get up and running.
  */
require('dotenv').config();
var express  = require('express'),
    path     = require('path'),
    bodyParser = require('body-parser'),
    app = express();

/**
  * Set EJS template Engine
  * EJS let's us use variables in-line
  * with our markup and renders it to HTML
  * for us.
  */
// app.set('views','./views');
// app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true })); //support x-www-form-urlencoded
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);
app.set('host', process.env.HOST || 'localhost');

app.disable('x-powered-by');

app.get('/', function(req, res) {
  res.send('index.html');
});

app.listen(app.get('port'), app.get('host'), function() {
    console.log('1617BarberLife.com has started listening at http://' + app.get('host') + ':' + app.get('port') + '. ^C to stop.');
});
