'use strict';

// SAMPLE CONTROLLER
var sequelize = require('../models');

/**
 * Module dependencies.
 */

var config = require('../config');

/**
 * Get current configuration
 */
exports.get = function (req, res) {
	res.json(config.app);
};

exports.post = function (req, res) {
    console.log(req.body.imageID)
    console.log(sequelize)
    sequelize.sequelize.query("SELECT * FROM videoinfos").then(myVideoInfo => {
        console.log(myVideoInfo)
    })
    // db.connect(process.env.DATABASE_URL, function(err, client, done) {
    //     if(err) {
    //         console.log(err)
    //     } else {
    //         console.log("CLIENT")
    //         console.log(client)
    //     }
    // })
	res.json(config.app);
};