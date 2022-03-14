import React, { useState } from "react";
import './components.css';

const AddEvent = props => {
    const [event, setEvent] = useState(props.event)
    const submit = e => {
        e.preventDefault();
        fetch('/addevent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ event }),
        }).then(function (response) {
            console.log(response.status);
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div>
            <form>
                <div onSubmit={submit}>
                    <label htmlFor="eventName">Event</label><br></br>
                    <input id="eventName"
                        type="text"
                        name="eventName"
                        onChange={e => setEvent({ ...event, subject: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="eventDescription">Description</label>
                    <br></br>
                    <input
                        id="eventDescription"
                        type="text"
                        name="eventDescription"
                        onChange={e => setEvent({ ...event, description: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="eventLocation">Location</label>
                    <br></br>
                    <input
                        id="eventLocation"
                        type="text"
                        name="eventLocation"
                        onChange={e => setEvent({ ...event, location: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="startHour">Start Time (hours)</label>
                    <br></br>
                    <input id="startHour" type="number" />
                    <br></br>
                    <label htmlFor="startMinutes">Start Time (minutes)</label>
                    <br></br>
                    <input id="startMinutes" type="number" />
                </div>
                <div>
                    <label>AM or PM?</label>
                    <input type="radio" name="startAMPM" value="am" />
                    <label>AM</label>
                    <input type="radio" name="startAMPM" value="pm" />
                    <label>PM</label>
                </div>
                <div>
                    <label htmlFor="endHour">End Time (hours)</label>
                    <br></br>
                    <input id="endHour" type="number" />
                    <br></br>
                    <label htmlFor="endMinutes">End Time (minutes)</label>
                    <br></br>
                    <input id="endMinutes" type="number" />
                </div>
                <div>
                    <label>AM or PM?</label>
                    <input type="radio" name="endAMPM" value="am" />
                    <label>AM</label>
                    <input type="radio" name="endAMPM" value="pm" />
                    <label>PM</label>
                </div>
                <div className="button-div">
                    <input type="submit" className="addEvent" name="Add Event" />
                </div>

            </form>
        </div>
    )
};


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

export default AddEvent;