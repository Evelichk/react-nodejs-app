'use strict';

const path = require('path');

function reductRootPath (reqUrl) {
    let rootPath = '';
    if(reqUrl.indexOf('server') !== -1){
        rootPath = reqUrl.replace('server', '');
    } else {
        rootPath = reqUrl;
    }
    rootPath = path.normalize(rootPath);

    return rootPath;
}

module.exports = reductRootPath;