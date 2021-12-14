//import { SenseHat } from '../src/sense-hat'

var senseHat = require('pi-sense-hat').create();
//let senseHat = require('../dist/sense-hat').create();

var express = require('express');
var router = express.Router();


/* GET  */
router.get('/', function(req, res, next) {
    senseHat.displayMessage("H ", "red", "blue");
let msg = '';
senseHat.on("environment", (message) => {
    console.log("environment event received:", JSON.stringify(message, null, 2));
	this.msg = message;
  res.render('index', { title: 'Environment' + msg });


});

process.on('SIGTERM', function () {
    process.exit(0);
});

});

module.exports = router;
