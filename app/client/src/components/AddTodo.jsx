import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './components.css';
import Header from './Header';

const AddTodo = props => {
  const [task, setTask] = useState(props.task)
  let navigate =  useNavigate();
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
    navigate("/todo")
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

export default AddTodo;