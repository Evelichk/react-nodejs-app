import React from 'react';
import { render } from 'react-dom';
import Note from '../Containers/Note'
import noteList from '../data/notesList'

export default class KeyNotes extends React.Component{
    render(){
        return (
            <div className="main-content container">
                <div className="text-content center-block">
                    <h1>KEY NOTES</h1>
                    <h3>MORE KEYNOTES COMING, STAY TUNED!</h3>
                    <Note items={noteList}/>
                    </div>
                </div>
        );
    };
};