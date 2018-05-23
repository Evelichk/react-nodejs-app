import React from 'react';
import { render } from 'react-dom';

export default class Info extends React.Component{
    render(){
        return (
            <div className="main-content container">
                <article className="text-content center-block">
                    <h1 className="text-center page-header">WHAT IS IT CONFERENCE 2017?</h1>
                    <p className="text-center">It is a conference for the leaders of large, complex organizations implementing programming principles and practices.
                        The event programming emphasizes both evolving technical and architectural practices and the methods needed to lead widespread change efforts in large organizations.
                        The goal is to give leaders the tools and practices they need to develop and deploy software faster and to win in the marketplace.</p>

                    <h3>Some stats on the 2016 San Francisco event:</h3>
                    <ul>
                        <li>More than 1,300 attendees</li>
                        <li>More than 100 speaker</li>
                        <li>75 sessions including keynotes, breakouts, panels, and workshops</li>
                        <li>More than 50 sponsors</li>
                        <li>3 packed days of informative sessions, networking, sharing, and learning</li>
                        <li> More than 10,000 tweets during the three-day event (from more than 1,800 contributors)</li>
                    </ul>
                    <h4>WHAT ATTENDEES ARE SAYING</h4>
                    <ul className="nonstyle-list">
                        <li> "What I liked most about iTech was meeting customers and discovering requirements. Networking and meeting with peers in the industry."</li>
                        <li>"It was great to have the conference near me. Most of these events are held out of town. I'm looking forward to the years to come and to see how the event will grow over time."</li>
                        <li> "Overall experience was a good one. Really enjoyed the networking and sessions."</li>
                        <li>"Very educational. Keynote speakers made very good presentations about the latest trends and where Industry headed."</li>
                        <li>"It was a fantastic conference in Edmonton. I had a great time and I hope/look forward to future tech conventions."</li>
                        <li>"My IT practice revolves around infrastructure build, upgrade, maintenance for clients. iTech fit neatly with my practice."</li>
                        <li>"I see very few conferences in the Toronto area focussing on the computing system as a whole."</li>
                        <li>"I really enjoyed the keynote on Cloud Services, IT Operations Management session, Nexsan's presentation on disk arrays and performance improvement."</li>
                        <li>"Staff at the Microsoft booth patiently answered all my questions about the latest technology."</li>
                        <li>"iTech highlights discrete technologies while also considering computing system/network design, integration and management. Please continue in this vein."</li>
                        <li>"Great show with class act exhibitors and keynote sessions! Looking forward to next year!"</li>
                    </ul>
                </article>
            </div>
        );

    };
};