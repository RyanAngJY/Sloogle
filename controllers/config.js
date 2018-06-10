'use strict';

// SAMPLE CONTROLLER
var ImageInfo = require('../models').sequelize.models.imageinfo;

/**
 * Module dependencies.
 */

var config = require('../config');

/**
 * Get current configuration
 */
exports.get = function (req, res) {
    console.log("GET REQUEST");
    console.log(req.params);
    ImageInfo.find({ where: {image_id: req.params.id} }).then(imageInfo => {
        if (imageInfo === null) {
            res.json({ 'likes' : 0 });
        } else {
            res.json({ 'likes' : imageInfo.likes });
        }
    })
	
};

exports.post = function (req, res) {
    console.log("========================================================")
    ImageInfo.find({ where: {image_id: req.body.image_id} }).then(imageInfo => {
        if (imageInfo === null) {   // create new key
            ImageInfo.create({
                image_id: req.body.image_id,
                likes: 1
            }).then(function(newImageInfo) {
                res.json({ 'likes' : 1 })
            })
        } else {    // update
            ImageInfo.update({likes: imageInfo.likes + 1}, { where: {image_id: req.body.image_id} })
                .then(function(updatedImageInfo) {
                res.json({ 'likes' : imageInfo.likes + 1 })
            });
        }
    })
};