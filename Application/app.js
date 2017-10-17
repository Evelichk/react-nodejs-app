'use strict'
import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';


class RegisterButton extends React.Component{
    render(){
        return (
            <button className="btn btn-success">Register Now</button>
        );
    }
}
ReactDOM.render(<RegisterButton/>, document.getElementById('root'));