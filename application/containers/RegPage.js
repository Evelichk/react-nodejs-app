'use strict';

import React, {Component} from 'react';
import RegForm from '../components/RegForm'


export default class RegPage extends Component{
    render(){
        return(
            <div className="main-content container">
                    <div className="text-content center-block">
                        <h1 className="reg">REGISTER NOW</h1>
                        <div className="reg-info">Please provide your information for registration. You will be notified about IT Conference news and updates.</div>
                        <RegForm/>
                        <p className="policy">IT Conference staff are paying close attention to privacy protection so that you can comfortably use website.
                            Toward this objective, we will take considerable care in handling your personal information to ensure privacy protection based on the information protection policies.
                            Please know that the privacy policies are subject to change without prior notice.</p>
                    </div>
            </div>
        );
    };
};