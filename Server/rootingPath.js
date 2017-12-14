var path = require('path');

function rootingPath(reqPath){

    var rootPath = '';
    var index = reqPath.indexOf('Server');
    try {
        if (index != -1) {
            rootPath = reqPath.replace('\Server', '');
        }
        ;
        rootPath = path.normalize(rootPath);
        return rootPath;
    } catch (error){

    }
}


module.exports = rootingPath;