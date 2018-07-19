'use strict';

const mongoose = require('mongoose');
const logger = require('../logger/logger');

let config = require('../../config/index');

mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));
mongoose.connection.on('connected', () => {
    logger.info('DB Connection estabilished to ' + config.get('mongoose:options:dbName') + ' database')
});
mongoose.connection.on('error', (err) => {
    mongoose.connection.close();
    logger.error('Mongoose Connection ERROR to DB: ' + err.message);
});

module.exports = mongoose;
