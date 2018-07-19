'use strict';

const express = require('express');
const config = require('./config/index');
const reductor = require('./services/reductor');
const favicon = require('serve-favicon');
const multer  = require('multer');
const Visitor = require('./services/models/visitor').Visitor;
const DbError = require('./services/errors/dbError');
const logger = require('./services/logger/logger');
const emailer = require('./services/emailer/emailer');

let app = express();
const upload = multer();

const mainRoutes = config.get('main_routes');
const serviceRoutes = config.get('service_routes');

app.set('home', reductor(__dirname));                           //reducts path according to application root path and sets it to express app
const home = app.get('home');
app.set('port', config.get('port'));
app.engine('ejs', require('ejs-mate'));
app.set('views', home + '/template');
app.set('view engine', 'ejs');
app.use(favicon(home +'/public/images/favicon.ico'));

logger.warn('Process environment set to: ' + app.get('env'));

app.get(mainRoutes, (req, res, next) => {                       //main routes handled with react-router (\page)
    if (mainRoutes.indexOf(req.url) !== -1) {
        res.sendFile(home + 'index.html', function (err) {
            if (err) next(err);
        });
    } else {
        next();
    }
});

app.get(serviceRoutes, (req, res, next) => {                    //handling service requests(styles, libraries etc)
    if(serviceRoutes.indexOf(req.url) !== -1){
        res.sendFile(home + req.url, function(err){
            if(err) next(err);
        });
    } else {
        next();
    }
});
app.get('/*',(req, res, next) =>{                               //redirecting all unmatched routes to 404 page
    res.redirect('/pagenotfound',404, function (err) {
        if (err) next(err);
    });

});

app.post('/datasending', upload.array(), (req, res, next)=>{    //midleware for registration post requests
    let visitor = new Visitor(req.body);                        //mongoose model
    visitor.save(function (err, visitor) {                      //saving to DB
        if (!visitor){
            next(new DbError(null, 503, 'Duplicate value'));    //error handler for duplicate values
        } else if(err) {
            return next(err)
        } else {
            emailer(req.body.email);                            //sending conformation email
            res.status(200).end();
        }
    });
});


app.use((err, req, res, next ) => {
    if(err instanceof DbError){
        logger.warn(err.code + ' ' + err.message);
        res.status(503).end()
    } else {
        logger.error(err.code + ' ' + err.message);
        res.status(500);
        res.render('index', {error: err});
    }
});

app.listen(config.get('port'), function ()
{logger.info('Server started, working on port: ' + config.get('port'))
});