import React from 'react';
import browserHistory from 'react-router';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { render } from 'react-dom';
import {Redirect} from 'react-router-dom';

import App from './Views/NavMenu';
import Info from './Views/About';
import Notes from './Views/KeyNotes';
import Home from './Views/IndexPage';



/* Routing for navigation menu*/
render(
    <Router history={browserHistory}>
        <App>
            <Route path="/home" component={Home}/>
            <Route path = "/about" component={Info}/>
            <Route path = "/keyNotes" component={Notes}/>
            <Redirect exact path="/" to="/home"/>

        </App>
    </Router>,
    document.getElementById('root')

);