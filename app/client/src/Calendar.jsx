import React from "react";

function Calendar() {
  return (
    <div className="calendar">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Calendar</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

//addevent
function addevent() {
  // let eventtitle = body.eventtitle;
  // let eventdate = body.eventdate;
  // let eventdescription = body.eventdescription;
  // let eventstarttime = body.eventstarttime;
  // let eventendtime = body.eventendtime;
  // let eventlocation = body.eventlocation;
  // let eventisrepetition = body.eventrepetition;

  console.log(eventtitle, eventdate, eventstarttime, eventendtime, eventlocation, eventdescription, eventisrepetition);
  let data = {
    'eventtitle': eventtitle, 'eventdate': eventdate, 'eventstarttime': eventstarttime, 'eventendtime': eventendtime, 'eventlocation': eventlocation, 'eventdescription': eventdescription, 'eventisrepetition': eventisrepetition
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
  // let eventdate = body.eventdate;
  // let eventdescription = body.eventdescription;
  // let eventstarttime = body.eventstarttime;
  // let eventendtime = body.eventendtime;
  // let eventlocation = body.eventlocation;
  // let eventisrepetition = body.eventrepetition;

  console.log(eventtitle, eventdate, eventstarttime, eventendtime, eventlocation, eventdescription, eventisrepetition);
  let data = {
    'eventtitle': eventtitle, 'eventdate': eventdate, 'eventstarttime': eventstarttime, 'eventendtime': eventendtime, 'eventlocation': eventlocation, 'eventdescription': eventdescription, 'eventisrepetition': eventisrepetition
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

export default Calendar;