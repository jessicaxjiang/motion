import React from "react";
import './components.css';
import Button from '@material-ui/core/Button';

function CalendarHeader() {
    return (
        <div className="App">
            <div className="small-header">
                <div className='TaskButton2'><Button href="/todo">Tasks</Button></div>
                <div className="title-text"><a href='/'>Motion</a> </div>
            </div>
        </div>
    )
}

export default CalendarHeader;