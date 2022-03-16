import React, { useState } from "react";
import './components.css';
import Header from './Header';
import Button from '@material-ui/core/Button';

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
      window.location.href = "/todo";
    }).catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div>
      <Header />
      <form onSubmit={submit}>
        <br></br>
        <div>
          <label htmlFor="taskName">Task</label><br></br>
          <input id="taskName"
            className="subject-input"
            type="text"
            name="taskName"
            placeholder="Task name"
            onChange={e => setTask({ ...task, title: e.target.value })} />
        </div>
        <br></br>
        <div>
          <label htmlFor="taskDescription">Description</label>
          <br></br>
          <textarea id="taskDescription" placeholder="Brief description..." className="description-input" type="text" name="taskDescription"
            onChange={e => setTask({ ...task, description: e.target.value })} />
        </div>
        <br></br>
        <div>
          <label htmlFor="time">Task duration</label>
          <br></br>
          <input className="subject-input" id="time" min="1" type="number" placeholder="Minutes"
            onChange={e => setTask({ ...task, est: e.target.value })} />
        </div>
        <div className="button-div">
          <Button type="submit" className='addTask'>Add Task</Button>
        </div>
      </form>
    </div>
  )
};

export default AddTodo;