import React from "react";
import './components.css';

function AddTodo() {
  return (
    <div>
      <form>
        <div>
          <label for="taskName">Task</label><br></br>
          <input id="taskName" type="text" name="taskName"/>
        </div>
        <div>
          <label for="taskDescription">Description</label>
          <br></br>
          <input id="taskDescription" type="text" name="taskDescription" />
        </div>
        <div>
          <label for="time">Estimate Time to Complete (minutes)</label>
          <br></br>
          <input id="time" type="number"/>
        </div>
        <div>
          <label>Add to calendar?</label>
          <input type="radio" name="calendar" value="yes"/>
          <label>Yes</label>
          <input type="radio" name="calendar" value="no"/>
          <label>No</label>
        </div>
          <div className="button-div">
            <button className="button" id="submit">Add Task</button>
            </div>
        
      </form>
    </div>
  );
}


export default AddTodo;