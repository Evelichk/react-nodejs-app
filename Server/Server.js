var http = require('http');
var path = require('path');
var fs = require('fs');
var public = require('./public.js');


http.createServer(function (req, res) {
console.log(req.url);
    if (req.url.match(/\.(html|css|js|jpg)$/)){
        public(req, res);
    } else if (req.url == '/'){

    }
}).listen(3000, function () {console.log('Server Enabled');

});
