import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';


class App extends React.Component {
    render(){
        return (<nav role="navigation">
            <div  className="navbar-header">
                <ul>
                    <li><img src="images/logo.jpg" alt="logo"></img></li>
                </ul>
            </div>
            <ul className="nav navbar-nav">
                <li><a href="">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Keynotes</a></li>
                <li><a href="">Speakers</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a id="reg" href="">Register Now</a></li>
            </ul>
        </nav>
        );
    };
};

ReactDOM.render(<App/>, document.getElementById('root'));