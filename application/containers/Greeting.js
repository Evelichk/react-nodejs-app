'use strict';

import React from 'react';


export default class Greeting extends React.Component{
    render(){
        return(
            <div className='text-center dberror img-responsive'>
                <img src="/public/images/check_mark.jpg" alt="error"/>
                <h1 className='error'>THANK YOU FOR YOUR REGISTRATION!</h1>
                <p>You will be notified on your e-mail adress with detailed information about ITConference.</p>
                <p>Do keep a look out, because the confirmation e-mail might end up in your spam folder.</p>
                <p>If you have any suggestions or a complaint please feel free to contact us.</p>
                <p><a href="/home">Return back home page</a></p>
            </div>

        )
    };
};