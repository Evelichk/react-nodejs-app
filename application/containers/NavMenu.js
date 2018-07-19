'use strict';

import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import Route from 'react-router-dom/Route'
import createBrowserHistory from 'history/createBrowserHistory'
import Clock from '../components/Clock';
import Info from './About';
import KeyNotes from './KeyNotes';
import Home from './HomePage';
import Contact from './Contacts';
import RegPage from './RegPage'
import NotFound from './NotFound'
import ErrorBoundary from '../components/ErrorBoundary'
import DuplDbError from "./DuplDbError";



export default class Navigation extends React.Component {

    render(){
        return(
            <ErrorBoundary>
                <Router history={createBrowserHistory()}>
                    <div>
                        <div className="container">
                            <nav role="navigation">
                                <div  className="navbar-header">
                                    <ul className="mainlogo">
                                        <li><img src="/public/images/logo.jpg" alt="logo"></img></li>
                                    </ul>
                                </div>
                                <ul className="nav navbar-nav">
                                    <li><Link to = "/home" >Home</Link></li>
                                    <li><Link to = "/about">About Us</Link></li>
                                    <li><Link to = "/notes">Keynotes</Link></li>
                                    <li><Link to = "/contact">Contact Us</Link></li>
                                    <li><Link to = "/registration">Register Now</Link></li>
                                </ul>
                            </nav>
                            <Clock/>
                        </div>
                            <Switch>
                                <Route path="/index.html" component={Home}/>
                                <Route path="/home" exact component={Home}/>
                                <Route path="/" exact component={Home}/>
                                <Route path = "/about" component={Info}/>
                                <Route path = "/notes" component={KeyNotes}/>
                                <Route path = "/contact" component={Contact}/>
                                <Route path = "/registration" component={RegPage}/>
                                <Route path = "/dberror" component={DuplDbError}/>
                                <Route component={NotFound}/>
                            </Switch>
                    </div>
                </Router>
            </ErrorBoundary>
        );
    };
};