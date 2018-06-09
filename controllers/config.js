'use strict';

// SAMPLE CONTROLLER

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