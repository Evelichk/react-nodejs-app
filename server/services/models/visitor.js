'use strict';

const mongoose = require('../mongoose/mongoose');
const Schema = mongoose.Schema;

let visitorSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    companyName: String,
    position: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    telephone: String
});

exports.Visitor = mongoose.model('Visitor', visitorSchema);