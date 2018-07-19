'use strict';

import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';

export default class Note extends Component{
    render(){
        return(
            <div>
                {this.props.items.map((item, index)=>
                    <div className="container note" key = {item.id}>
                        <p className="key-words">{item.title}</p>
                        <div className="img-container pull-left">
                            <img className="img-responsive" src={item.imgSrc} alt="photo"/>
                        </div>
                        <p className="person-descript" >{item.description}</p>
                        <p>{item.text}</p>
                    </div>
                )};
            </div>
        );
    };
};

Note.propTypes = {
    items: PropTypes.array.isRequired,
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
