'use strict';

import React from 'react';


export default class NotFound extends React.Component{
    render(){
        return(
            <div className='text-center vcenter'>
                <h1 className='error'>404 Page not found</h1>
                <p>The page you are looking for doesn't exist or another error occurred</p>
                <p><a href="/home">Return back home</a></p>
            </div>

        )
    };
};