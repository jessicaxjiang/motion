import React from "react";
import './components.css';

function AddTodo() {
  return (
    <div>
      <form>
        <div>
          <label for="taskName">Task</label><br></br>
          <input id="taskName" type="text" name="taskName" />
        </div>
        <div>
          <label for="taskDescription">Description</label>
          <br></br>
          <input id="taskDescription" type="text" name="taskDescription" />
        </div>
        <div>
          <label for="time">Estimate Time to Complete (minutes)</label>
          <br></br>
          <input id="time" type="number" />
        </div>
        <div>
          <label>Add to calendar?</label>
          <input type="radio" name="calendar" value="yes" />
          <label>Yes</label>
          <input type="radio" name="calendar" value="no" />
          <label>No</label>
        </div>
        <div className="button-div">
          <button className="button" id="submit">Add Task</button>
        </div>

      </form>
    </div>
  );
}


//addtask
function addTask() {
  let nameInput = document.getElementById("taskName");
  let descriptionInput = document.getElementById("taskDescription");
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

export default AddTodo;