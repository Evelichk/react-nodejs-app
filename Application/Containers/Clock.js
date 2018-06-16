import React, {Component} from 'react';
import { render } from 'react-dom';


export default class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            deadLine: "November 23 2018 23:59:59 GMT+02:00"
        };
    };
    componentWillMount(){
        this.getTimeUntil(this.state.deadLine)
    };

    componentDidMount(){
        setInterval(() => this.getTimeUntil(this.state.deadLine), 1000);
    };

    leading0(num){
        if(num < 10) {
            return '0' + num;
        };
        return num;
    };

    getTimeUntil(deadLine){
        const time = Date.parse(deadLine) - Date.parse(new Date());

        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor((time/(1000*60*60)) % 24);
        const days = Math.floor((time/(1000*60*60*24)));

        this.setState({days, hours, minutes, seconds});

    };
    render(){
        return(
            <div className="text-right clock">
            <ul className="text-center">
                <li className="btn btn-default navbar-btn days">{this.leading0(this.state.days)} days</li> :
                <li className="btn btn-default navbar-btn hours">{this.leading0(this.state.hours)} hours</li> :
                <li className="btn btn-default navbar-btn minutes">{this.leading0(this.state.minutes)} min</li> :
                <li className="btn btn-default navbar-btn seconds">{this.leading0(this.state.seconds)} sec</li>
            </ul>
            </div>
        )

    };
};