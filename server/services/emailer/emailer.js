'use strict';

const nodemailer = require('nodemailer');
const logger = require('../logger/logger');
const ejs = require('ejs');



const options = {
    service: 'gmail',
    auth: {
        user: 'myconftest@gmail.com',
        pass: 'conf159753'
    }
};

function emaier(receiver) {
        ejs.renderFile(__dirname + '/template/layout.ejs', (err, data) => {
            if (err){
                logger.error(err.code + err.message);
            } else {
                let message = {
                    from: 'ITConference Team',
                    to: receiver,
                    subject: 'ITConference Greetings',
                    html: data
                };
                let transporter = nodemailer.createTransport(options, message);

                transporter.sendMail(message, (err, info) => {
                    if (err){
                        logger.error('Email sending error' + err.message)
                    }
                });
            }
        });
}

module.exports = emaier;