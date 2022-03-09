import './components.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import React from "react";

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
      <div className="Calendar">
        Calendar
      </div>
      <ScheduleComponent eventSettings={{dataSource: [{
        Id : 1,
        EndTime: new Date(2022, 4, 1, 6, 30),
        StartTime: new Date(2022, 4, 1, 6, 0),
        Subject: 'test',
        Location: 'testLocation'

      }]}}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent> 
    </div>
  );
}

export default Calendar;