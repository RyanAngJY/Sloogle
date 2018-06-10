var express = require('express');
var app = express();
var config = require('./config');
var bodyParser = require("body-parser");
var db = require('./models');

app.use(require('connect-livereload')());
app.use(bodyParser.urlencoded({extended: true}));

// allow serving of static files (ie in public)
app.use('/public', express.static(__dirname + '/public'));

//You can use whatever templating engine you would like
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/views');

//Create routes
require('./routes')(app);

//Connect to Postgres DB & sync models
db.sequelize
    .sync({ force: true })
    .then(function () {
        // Start server
        console.log("Success")
        app.listen(config.port);
    }, function (err) {
        console.error(err);
    });