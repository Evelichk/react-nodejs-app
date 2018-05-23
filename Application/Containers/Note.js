import React from 'react';
import { render } from 'react-dom';

export default class Note extends React.Component{
    render(){
        return(
            <div className="container note">
                <p className="key-words">{this.props.title}</p>
                <div className="img-container pull-left">
                    <img className="img-responsive" src={this.props.imgSrc} alt="photo"/>
                </div>
                <p className="person-descript">{this.props.description}</p>
                <p>{this.props.text}</p>
            </div>
        );

    };
};