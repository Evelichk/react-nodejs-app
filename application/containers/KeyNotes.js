'use strict';

import React from 'react';
import Note from '../components/Note'
import noteList from '../data/notes_list'

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