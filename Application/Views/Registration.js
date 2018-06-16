import React from 'react';
import { render } from 'react-dom';


export default class RegForm extends React.Component{
    render(){
        return(
            <div className="main-content container">
                    <div className="text-content center-block">
                        <h1 className="reg">REGISTER NOW</h1>
                        <div className="reg-info">Please provide your information for registration. You will be notified about IT Conference news and updates.</div>
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label className="control-label" htmlFor ="inputFname">First Name<span className="warn">*</span></label>
                                    <input type="text" id="inputFname" placeholder="First Name" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="control-label" htmlFor ="inputLname">Last Name<span className="warn">*</span></label>
                                <input type="text" id="inputLname" placeholder="Last Name" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="control-label" htmlFor="inputComName">Company Name</label>
                                <input type="text" id="inputComName" placeholder="Company Name" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="control-label" htmlFor="inputPos">Position</label>
                                <input type="text" id="inputPos" placeholder="Position" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="control-label" htmlFor ="inputEmail">Email Adress<span className="warn">*</span></label>
                                <input type="email" id="inputEmail" placeholder="Email Adress" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="control-label" htmlFor ="inputTel">Telephone</label>
                                <input type="tel" id="inputTel" className="form-control" placeholder="Telephone" pattern="+380[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"/>
                            </div>
                            <p>Fields marked with an asterisk (*) must be filled in</p>
                            <button className="btn btn-primary" type="submit">Register</button>
                        </form>
                        <p className="policy">IT Conference staff are paying close attention to privacy protection so that you can comfortably use website.
                            Toward this objective, we will take considerable care in handling your personal information to ensure privacy protection based on the information protection policies.
                            Please know that the privacy policies are subject to change without prior notice.</p>
                    </div>
            </div>
        );
    };
};