'use strict';

import React from 'react';


export default class DbError extends React.Component{
    render(){
        return(
            <div className='text-center dberror img-responsive'>
                <img src="/public/images/dberror.jpg" alt="error"/>
                <h1 className='error'>DB ERROR!</h1>
                <p>There's database error occured!</p>
                <p>Please stand by, we are on it!</p>
                <p>Try to register again later.</p>
                <p><a href="/registration">Return back to registration page</a></p>
            </div>

        )
    };
};