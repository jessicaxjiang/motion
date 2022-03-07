import React from "react";
import './components.css';

function Todo() {
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
          <label for="time">How long will it take you to complete? (minutes)</label>
          <br></br>
          <input id="time" type="number"/>
        </div>
        <div>
          <label>Add to calendar?</label>
          <input type="radio" name="quality" value="yes"/>
          <label>Yes</label>
          <input type="radio" name="quality" value="no"/>
          <label>No</label>
        </div>
          <div className="button-div">
            <button className="button" id="submit">Add Task</button>
            </div>
        
      </form>
    </div>
  );
}


export default Todo;