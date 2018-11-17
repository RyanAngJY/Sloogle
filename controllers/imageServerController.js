'use strict';

var ImageInfo = require('../models').sequelize.models.imageinfo;

exports.getApiKey = function(req, res) {
    res.status(200).json({ 'unsplashApiKey' : process.env.UNSPLASH_API_KEY })
}

exports.get = function (req, res) {
    ImageInfo.find({ where: {image_id: req.params.id} }).then(imageInfo => {
        if (imageInfo === null) {
            res.status(200).json({ 'likes' : 0 });
        } else {
            res.status(200).json({ 'likes' : imageInfo.likes });
        }
    })
};

exports.post = function (req, res) {
    ImageInfo.find({ where: {image_id: req.body.image_id} }).then(imageInfo => {
        if (imageInfo === null) {   // create new key
            ImageInfo.create({
                image_id: req.body.image_id,
                likes: 1
            }).then(function(newImageInfo) {
                res.status(200).json({ 'likes' : 1 })
            })
        } else {    // update
            ImageInfo.update({likes: imageInfo.likes + 1}, { where: {image_id: req.body.image_id} })
                .then(function(updatedImageInfo) {
                res.status(200).json({ 'likes' : imageInfo.likes + 1 })
            });
        }
    })
};