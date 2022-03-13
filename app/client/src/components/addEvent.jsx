import React from "react";
import './components.css';

function AddEvent() {
  return (
    <div>
      <form>
        <div>
          <label for="eventName">Event</label><br></br>
          <input id="eventName" type="text" name="eventName" />
        </div>
        <div>
          <label for="eventDescription">Description</label>
          <br></br>
          <input id="eventDescription" type="text" name="eventDescription" />
        </div>
        <div>
          <label for="eventLocation">Location</label>
          <br></br>
          <input id="eventLocation" type="text" name="eventLocation" />
        </div>
        <div>
          <label for="startHour">Start Time (hours)</label>
          <br></br>
          <input id="startHour" type="number" />
          <label for="startMinutes">Start Time (minutes)</label>
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
          <label for="endHour">End Time (hours)</label>
          <br></br>
          <input id="endHour" type="number" />
          <label for="endMinutes">End Time (minutes)</label>
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
          <button className="button" id="submit">Add event</button>
        </div>

      </form>
    </div>
  );
}


//addtask
function addTask() {
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