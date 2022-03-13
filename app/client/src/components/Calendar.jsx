import './components.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import React from "react";
import Button from '@material-ui/core/Button';
/*
this is the calendar API I used:
https://ej2.syncfusion.com/react/documentation/api/calendar/#calendarcomponent

scheduleComponent API:
https://ej2.syncfusion.com/react/documentation/api/schedule#properties

using this tutorial:
https://www.youtube.com/watch?v=wgqX295fGkY
*/
function Calendar() {
  return (
    <div>
      <div className="App">
        <div className="login-header">
          <div className='CalendarButton'><Button href="/calendar">Calendar</Button></div>
          <div className='TaskButton'><Button href="/todo">Tasks</Button></div>
          <div className="title-text"><a href='/'>Motion</a> </div>
        </div>
      </div>
      <div className="Calendar">
        Calendar
      </div>
      <ScheduleComponent>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
}

export default Calendar;