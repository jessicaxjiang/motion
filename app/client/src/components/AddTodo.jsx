import React, { useState } from "react";
import './components.css';
import Header from './Header';

const AddTodo = props => {
  const [task, setTask] = useState(props.task)

  const submit = e => {
    e.preventDefault();
    fetch('/addtask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({task}),
    }).then(function (response) {
      console.log(response.status);
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div>
      <Header />
      <form onSubmit={submit}>
        <div>
          <label htmlFor="taskName">Task</label><br></br>
          <input id="taskName"
            type="text"
            name="taskName"
            onChange={e => setTask({ ...task, title: e.target.value })} />
        </div>
        <div>
          <label htmlFor="taskDescription">Description</label>
          <br></br>
          <input id="taskDescription" type="text" name="taskDescription"
            onChange={e => setTask({ ...task, description: e.target.value })} />
        </div>
        <div>
          <label htmlFor="time">Estimate Time to Complete (minutes)</label>
          <br></br>
          <input id="time" type="number"
            onChange={e => setTask({ ...task, est: e.target.value })} />
        </div>
        <div>
          <label>Add to calendar?</label>
          <input type="radio" name="calendar" value="yes" />
          <label>Yes</label>
          <input type="radio" name="calendar" value="no" />
          <label>No</label>
        </div>
        <div className="button-div">
          <input type="submit" className="addTask" name="Add Task" />
        </div>
      </form>
    </div>

  )
};


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