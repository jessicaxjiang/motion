import React from "react";

function Todo() {
    return (
      <div>
        <h3>TODO</h3>
        <form >
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
          />
          <button>
            Add #
          </button>
        </form>
      </div>
    );
  }


export default Todo;