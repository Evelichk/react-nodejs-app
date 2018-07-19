'use strict';

import React, {Component} from 'react';


export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div className='text-center verror'>
                    <img src="/public/images/error.jpg" alt="error"/>
                    <h1 className='error'>Something went wrong</h1>
                    <p>We are sorry, website isn't working right now. But we are on it! Please try again later.</p>
                    <details>
                        {this.state.errorInfo}
                    </details>
                </div>
            );
        }
        return this.props.children;
    }
}

