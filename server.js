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

var nodemailer = require('nodemailer');
var sparkPostTransport = require('nodemailer-sparkpost-transport');
var transporter = nodemailer.createTransport(sparkPostTransport({sparkPostApiKey: process.env.SPARKPOST_API_KEY}))

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

app.post('/contact', function(req, res) {
  transporter.sendMail({
    from: 'headquarters@rappiddevelopment.com',
    to: 'matt@rappiddevelopment.com',
    subject: 'New Message From 1617 Website',
    text: '',
    html: 'New message from the 1617 website: <br/>' +
      'Name: ' + req.body.name + '<br/>' +
      'E-mail: ' + req.body.email + '<br/>' +
      'Subject: ' + req.body.subject + '<br/>' +
      'Message: ' + req.body.body + '<br/>'
  }, function(err, info) {
    if (err) {
      console.log('Error: ' + err);
      res.send(401, 'There was a problem sending your email.')
    } else {
      res.send(200);
    }
  });
});

app.listen(app.get('port'), app.get('host'), function() {
    console.log('1617BarberLife.com has started listening at http://' + app.get('host') + ':' + app.get('port') + '. ^C to stop.');
});
