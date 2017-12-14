import React from 'react';
import {  Link} from 'react-router-dom';
import { render } from 'react-dom';


export default class App extends React.Component {
    render(){
        return(
            <div>
            <div className="container">
                <nav role="navigation">
                    <div  className="navbar-header">
                        <ul className="mainlogo">
                            <li><img src="images/logo.jpg" alt="logo"></img></li>
                        </ul>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to = "/home" >Home</Link></li>
                        <li><Link to = "/about">About Us</Link></li>
                        <li><Link to = "/keyNotes">Keynotes</Link></li>
                        <li><Link to = "/speakers">Speakers</Link></li>
                        <li><Link to = "/contacts">Contact Us</Link></li>
                        <li><Link to = "/registration">Register Now</Link></li>
                    </ul>
                </nav>
            </div>
                {this.props.children}
            </div>
        );
    };
};