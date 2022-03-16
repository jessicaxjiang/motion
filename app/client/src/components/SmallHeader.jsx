import React from "react";
import './components.css';
import Button from '@material-ui/core/Button';

function SmallHeader() {
    return (
        <div className="App">
            <div className="header">
                <div className='CalendarButton'><Button href="/calendar">Calendar</Button></div>
                <div className='TaskButton'><Button href="/todo">Tasks</Button></div>
                <div className="title-text"><a href='/'>Motion</a> </div>
            </div>
        </div>
    )
}

export default SmallHeader;