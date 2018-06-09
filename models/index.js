var fs = require('fs'),
    path = require('path'),
    Sequelize = require('sequelize'),
    lodash = require('lodash'),
    config = require('../config.js'),
    db = {};


var sequelize = new Sequelize(config.db.name, config.db.username, config.db.password, {
    dialect: 'postgres',
    host: 'localhost',
    port: 35729,
    logging: config.db.logging || console.log,
    dialectOptions: {
        ssl: true
    }
});

db = {
    VideoInfo: sequelize.import('./videoInfo')
}


fs.readdirSync(__dirname).filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file !== 'README.md');
}).forEach(function (file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

module.exports = lodash.extend({
    sequelize: sequelize,
    Sequelize: Sequelize
}, db);
