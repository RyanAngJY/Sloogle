/**
 * Server Routes
 * 
 * Add routes as you need them
 * 
 */

'use strict';

module.exports = function (app) {
    var imageController = require('./controllers/imageServerController.js');

    app.route('/api/key')
        .get(imageController.getApiKey);
        
    app.route('/api/config')
        .post(imageController.post);
        
    app.route('/api/config/:id')
        .get(imageController.get);

    app.route('/').get(function(req, res){
        res.render('index.ejs');
    });

};