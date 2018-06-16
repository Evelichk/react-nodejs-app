import React from 'react';
import { render } from 'react-dom';

export default class Contact extends React.Component{
    render(){
        return (
            <div className="main-content container">
                    <div className="text-content center-block">
                        <h1>CONTACT US</h1>
                        <p className="text-left">
                            IT Conference company is a fast growing and dynamic event production company based in Ukraine. We organize a number of conference events
                            in multiple industries that focus on high content and attendee education. As producers of international trade and consumer events, conferences, publications
                            and eMedia we are in business to support and build innovative, effective business communities.
                        </p>
                        <div className="text-center">
                            <h2>IT CONFERENCE TEAM</h2>
                            <h3>REGISTRATION CUSTOMER SERVICE</h3>
                            <p>registration@itconference.ua</p>
                            <p>+38057-111-11-11 </p>
                            <h3>SPONSORSHIP/EXHIBIT SALES</h3>
                            <p>Dave Gahan</p>
                            <p>Event Director</p>
                            <p>dghan@itconference.ua</p>
                            <p>+38057-111-11-11 ext 2249</p>
                            <h3>EVENT OPERATIONS</h3>
                            <p>Floor Jansen</p>
                            <p>fjansen@itconference.ua</p>
                            <p>+38057-111-11-11 ext 2245</p>
                        </div>
                        <div className="text-center credent">
                            <p>ITCONF Communications </p>
                            <p>59/56 Traktorostroiteley pr.</p>
                            <p>Kharkiv, Ukraine, 61118</p>
                            <p>Telephone (057)111-11-12 or 111-11-13</p>
                        </div>
                    </div>
            </div>
        );

    };
};