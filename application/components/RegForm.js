'use strict';

import React, {Component} from 'react';
import DuplDbError from '../containers/DuplDbError'
import Greeting from '../containers/Greeting'
import DbError from '../containers/DbError'


export default class RegForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            companyName:'',
            email: '',
            position: '',
            telephone: '',
            firstNameValid: false,
            lastNameValid: false,
            emailValid: false,
            formValid: false,
            isDuplicate: false,
            isSucceeded: false,
            isFailed: false
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.validateField = this.validateField.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUserInput(e)  {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, ()=> {this.validateField(name, value) });
    };
    handleSubmit(e){
        e.preventDefault();
        const data = new FormData(e.target);
        let xhr = new XMLHttpRequest();
        xhr.timeout = 10000;
        xhr.open('POST', '/datasending');
        xhr.send(data);
        xhr.ontimeout = () => {
            this.setState({isFailed: true});
            throw new Error('Database Error');
        };

        xhr.onreadystatechange = () => {
            if(xhr.status === 503){
                this.setState({isDuplicate: true});
            } else if (xhr.status === 200){
                this.setState({isSucceeded: true});
            }
        }
    }
    validateField(fieldName, value){
        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.lastNameValid;
        let emailValid = this.state.emailValid;

        switch(fieldName){
            case 'firstName':
                firstNameValid = value.length > 2;
                break;
            case 'lastName':
                lastNameValid = value.length >2;
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                break;
            default:
                break;
        }

        this.setState({firstNameValid: firstNameValid, lastNameValid: lastNameValid, emailValid: emailValid}, this.validateForm);
    }


    validateForm(){
        this.setState({formValid: this.state.firstNameValid && this.state.lastNameValid && this.state.emailValid});
    }

    render(){
        if (this.state.isDuplicate){
            return <DuplDbError/>
        } else if(this.state.isSucceeded){
            return <Greeting/>
        } else if(this.state.isFailed){
            return <DbError/>
        }
        {
            return (
                <form className="form-horizontal" name="visitor" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="control-label" htmlFor ="firstName">First Name<span className="warn">*</span></label>
                        <input type="text" value={this.state.firstName} onChange={this.handleUserInput} name="firstName" required placeholder="First Name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor ="lastName">Last Name<span className="warn">*</span></label>
                        <input type="text" value={this.state.lastName} onChange={this.handleUserInput} name="lastName" required placeholder="Last Name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor="companyName">Company Name</label>
                        <input type="text" value={this.state.companyName} onChange={this.handleUserInput} name="companyName" placeholder="Company Name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor="position">Position</label>
                        <input type="text" value={this.state.position} onChange={this.handleUserInput} name="position" placeholder="Position" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor ="inputEmail">Email Adress<span className="warn">*</span></label>
                        <input type="email" value={this.state.email} onChange={this.handleUserInput} name="email" required placeholder="Email Adress" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor ="telephone">Telephone</label>
                        <input type="text" value={this.state.telephone} onChange={this.handleUserInput} name="telephone" className="form-control" placeholder="Telephone"/>
                    </div>
                    <p>Fields marked with an asterisk (*) must be filled in</p>
                    <button className="btn btn-primary" type="submit" disabled={!this.state.formValid}>Register</button>
                </form>

            );
        }

    };
};

