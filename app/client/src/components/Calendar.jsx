import './components.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import React from "react";

/*
this is the calendar API I used:
https://ej2.syncfusion.com/react/documentation/api/calendar/#calendarcomponent

using this tutorial:
https://www.youtube.com/watch?v=wgqX295fGkY
*/
function Calendar() {
  return (
    <div>
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