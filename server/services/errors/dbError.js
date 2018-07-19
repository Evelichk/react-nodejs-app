'use strict';

class DbError extends Error{
    constructor(props, code, message){
        super(props);
        this.code = code;
        this.message = message;
    }
}

module.exports = DbError;