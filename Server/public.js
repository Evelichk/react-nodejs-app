var fs = require ('fs');
var path = require('path');
var rootingPath = require('./rootingPath');


function public (req, res) {

    var reqPath = req.url;
    var extension = path.extname(req.url);
    var contentType = '';
    var mainPath = rootingPath(path.resolve(__dirname + reqPath));

    try {
        var filePath = decodeURIComponent(req);

    } catch(err) {
        res.statusCode = 400;
        res.end('Something went wrong');
    }

    if (~filePath.indexOf('\0')){
        res.statusCode = 400;
        res.end('bed request');
    }


    switch (extension){
        case '.html':
            contentType = 'text/html';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.map':
            contentType = 'text/css';
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.otf':
            contentType = 'application/font-otf';
            break;
        default:
            contentType = 'text/plain';
    };


    res.statusCode = 200;
    res.setHeader = ('ContentType', contentType);

    var stream = fs.createReadStream(path.resolve(mainPath));
    stream.pipe(res);


    stream.on('error', function (error) {
        if(error.code === 'ENOENT'){
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.end('Page not found');
        } else {
            res.writeHead(500, {'Content-Type': 'text/plain'})
            res.end('Server error');
        }
        
    } );
}

module.exports = public;