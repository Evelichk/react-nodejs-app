import React from 'react';
import { render } from 'react-dom';

export default class Home extends React.Component{
    render(){
        return (
            <div className="mainWrapper">
                <img src="/images/banner.jpg" className="img-responsive" alt="banner"></img>
            </div>
        );

    };
};