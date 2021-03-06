"use strict";
// server.js

// BASE SETUP
// =============================================================================

var Restaurant = require('./model/Restaurant');
var AppDAO = require('./dao/AppDAO');

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var cors = require('cors');

var corsOptions = {
  origin: 'http://localhost'
};
app.use(cors(corsOptions));
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.post('/restaurants', function(req, res) {
	var r1 = new Restaurant(1,"outback");
	var r2 = new Restaurant(2,"apple bees");

	var rests = [r1, r2];

	new AppDAO().connect();
	new AppDAO().testPromise();

	res.json(rests);
    //res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api',  router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);