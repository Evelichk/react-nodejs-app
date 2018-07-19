'use strict';

import React from 'react';


export default class DuplDbError extends React.Component{
    render(){
        return(
            <div className='text-center dberror img-responsive'>
                <img src="/public/images/duplerror.jpg" alt="error"/>
                <h1 className='error'>OOPS!</h1>
                <p>It seems that you have already registred on IT Conference 2018 or another error occured!</p>
                <p>Please check your e-mail for detailed information if you have already registred.</p>
                <p>Check your credentials and try register once more.</p>
                <p>If there's still error occured, please contact us with a way convinient for you.</p>
                <p><a href="/registration">Return back to registration page</a></p>
            </div>

        )
    };
};