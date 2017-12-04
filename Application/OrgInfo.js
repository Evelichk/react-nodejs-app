'use strict'
import React from 'react';
import { render } from 'react-dom';

export class Info extends React.Component{
    render(){
        return (
            <div className="">
                <h1 className="text-center page-header">What is IT Conference 2017?</h1>
                <p className="text-center">It is a conference for the leaders of large, complex organizations implementing programming principles and practices.
                    The event programming emphasizes both evolving technical and architectural practices and the methods needed to lead widespread change efforts in large organizations.
                    The goal is to give leaders the tools and practices they need to develop and deploy software faster and to win in the marketplace.</p>

                <h2>Some stats on the 2016 San Francisco event:</h2>
                <ul>
                <li>More than 1,300 attendees</li>
                    <li>More than 100 speaker</li>
                    <li>75 sessions including keynotes, breakouts, panels, and workshops</li>
                    <li>More than 50 sponsors</li>
                    <li>3 packed days of informative sessions, networking, sharing, and learning</li>
                    <li> More than 10,000 tweets during the three-day event (from more than 1,800 contributors)</li>
                </ul>
            </div>
        );

    };
};