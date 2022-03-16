import './components.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import React from "react";
import CalendarHeader from './CalendarHeader';
import Button from '@material-ui/core/Button';

/*
this is the calendar API I used:
https://ej2.syncfusion.com/react/documentation/api/calendar/#calendarcomponent
scheduleComponent API:
https://ej2.syncfusion.com/react/documentation/api/schedule#properties
using this tutorial:
https://www.youtube.com/watch?v=wgqX295fGkY
*/

let data = [{
  Id: 1,
  EndTime: new Date(2022, 4, 1, 6, 30),
  StartTime: new Date(2022, 4, 1, 6, 0),
  Subject: 'test2',
  Location: 'testLocation'

}]

function Calendar() {
  let loading = -1;
  let serverData = {}
  let url = `http://localhost:3001/returnallevents`;
  if (loading === -1) {
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log("Client received from server:", data);
      serverData = data.dataSource
      for (let event of serverData) {
        event.startTime = new Date(event.startTime);
        event.endTime = new Date(event.endTime);
      }
      console.log("changing to date objects: ", serverData);
    }).catch(function (error) {
      console.log(error); // in case fetch crashes for some reason
    });
    loading = 0;
  }
  if (loading === 0) {
    console.log(loading)
    return (
      <div>
        <CalendarHeader />
        <div className="Calendar">
          Calendar
        </div>
        <ScheduleComponent eventSettings={{ dataSource: serverData }}>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    );
  }
  return (
    <div></div>
  )

}

/*
//addevent
function addevent() {
  // let eventtitle = body.eventtitle;
  // let eventdescription = body.eventdescription;
  // let eventstarttime = body.eventstarttime;
  // let eventendtime = body.eventendtime;
  // let eventlocation = body.eventlocation;
  // let eventisrepetition = body.eventrepetition;
  console.log(eventtitle, eventstarttime, eventendtime, eventlocation, eventdescription, eventisrepetition);
  let data = {
    'eventtitle': eventtitle, 'eventstarttime': eventstarttime, 'eventendtime': eventendtime, 'eventlocation': eventlocation, 'eventdescription': eventdescription, 'eventisrepetition': eventisrepetition
  };
  fetch('/addevent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(function (response) {
    console.log(response.status); // will be 400 if request failed
    if (response.status === 200) {
      msg.textContent = "Success"
    } else {
      msg.textContent = "Bad request"
    }
  }).catch(function (error) {
    console.log(error); // in case fetch crashes for some reason
  });
}
//updateevent
function updateevent() {
  // let eventtitle = body.eventtitle;
  // let eventdescription = body.eventdescription;
  // let eventstarttime = body.eventstarttime;
  // let eventendtime = body.eventendtime;
  // let eventlocation = body.eventlocation;
  // let eventisrepetition = body.eventrepetition;
  console.log(eventtitle, eventstarttime, eventendtime, eventlocation, eventdescription, eventisrepetition);
  let data = {
    'eventtitle': eventtitle, 'eventstarttime': eventstarttime, 'eventendtime': eventendtime, 'eventlocation': eventlocation, 'eventdescription': eventdescription, 'eventisrepetition': eventisrepetition
  };
  fetch('/updateevent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(function (response) {
    console.log(response.status); // will be 400 if request failed
    if (response.status === 200) {
      msg.textContent = "Success"
    } else {
      msg.textContent = "Bad request"
    }
  }).catch(function (error) {
    console.log(error); // in case fetch crashes for some reason
  });
}
//returnallevents
function returnAllevents() {
  let url = `/returnallevents`;
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log("Client received from server:", data);
  }).catch(function (error) {
    console.log(error); // in case fetch crashes for some reason
  });
}
//returnevent
function returnevent() {
  // let eventtitle = body.eventtitle;
  let url = `/returnevent?title=${eventtitle}`;
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log("Client received from server:", data);
  }).catch(function (error) {
    console.log(error); // in case fetch crashes for some reason
  });
}
//deletevent
function deletevent() {
  // let eventtitle = body.eventtitle;
  console.log(eventtitle);
  let data = { 'eventtitle': eventtitle };
  fetch('/deletevent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(function (response) {
    console.log(response.status); // will be 400 if request failed
    if (response.status === 200) {
      msg.textContent = "Success"
    } else {
      msg.textContent = "Bad request"
    }
  }).catch(function (error) {
    console.log(error); // in case fetch crashes for some reason
  });
}
*/

export default Calendar;