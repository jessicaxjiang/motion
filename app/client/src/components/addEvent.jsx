import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import SmallHeader from './SmallHeader';
import './components.css';

const AddEvent = props => {
    const [event, setEvent] = useState(props.event)
    console.log(event);
    const submit = e => {
        e.preventDefault();
        fetch('/addevent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ event }),
        }).then(function (response) {
            console.log(response.status);
            console.log(response);
            window.location.href = "/calendar";
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div>
            <SmallHeader />
            <form  onSubmit={submit}>
                <div>
                    <label htmlFor="eventName">Event</label>
                    <input id="eventName"
                        type="text"
                        name="eventName"
                        className="subject-input"
                        placeholder="Event name"
                        onChange={e => setEvent({ ...event, subject: e.target.value })} />
                </div>
                <br></br>
                <div>
                    <label htmlFor="eventDescription">Description</label>
                    <br></br>
                    <textarea
                        className="description-input"
                        id="eventDescription"
                        type="text"
                        name="eventDescription"
                        placeholder="Add description"
                        onChange={e => setEvent({ ...event, description: e.target.value })} />
                </div>
                <br></br>
                <div>
                    <label htmlFor="eventLocation">Location</label>
                    <br></br>
                    <input
                        id="eventLocation"
                        type="text"
                        name="eventLocation"
                        className="subject-input"
                        placeholder="Add Location"
                        onChange={e => setEvent({ ...event, location: e.target.value })} />
                </div>
                <br></br>
                <div>
                    <label htmlFor="startTime">Start Time</label>
                    <br></br>
                    <input className="subject-input" id="startTimie" type="datetime-local"
                        onChange={e => setEvent({ ...event, startTime: e.target.value })} />
                </div>
                <br></br>
                <div>
                    <label htmlFor="endTime">End Time</label>
                    <br></br>
                    <input className="subject-input" id="endTime" type="datetime-local"
                        onChange={e => setEvent({ ...event, endTime: e.target.value })} />
                </div>
                <br></br>
                <div className="button-div">
                    <Button type="submit">Add Event</Button>
                </div>
            </form>
        </div>
    )
};

/*
//addEvent logic?
function addEvent() {
    let nameInput = document.getElementById("eventName");
    let descriptionInput = document.getElementById("eventDescription");
    let timeInput = document.getElementById("time");

    // submitButton.addEventListener("click", addTasks());

    let tasktitle = nameInput.value;
    let taskEST = timeInput.value;
    let taskdescription = descriptionInput.value;
    let taskisdone = false;

    console.log(tasktitle, taskEST, taskdescription, taskisdone);
    let data = { 'tasktitle': tasktitle, 'taskEST': taskEST, 'taskdescription': taskdescription, 'taskisdone': taskisdone };

    fetch('/addtask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }).then(function (response) {
        console.log(response.status); // will be 400 if request failed
        // if (response.status === 200) {
        //   msg.textContent = "Success"
        // } else {
        //   msg.textContent = "Bad request"
        // }
    }).catch(function (error) {
        console.log(error); // in case fetch crashes for some reason
    });
}
*/
export default AddEvent;