import './components.css';
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
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
      <CalendarComponent></CalendarComponent>
    </div>
  );
}

export default Calendar;