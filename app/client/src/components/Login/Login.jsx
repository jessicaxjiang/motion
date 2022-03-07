import React from "react";
import './Login.css';


// creating the form of the login page which will have username and 
// password inputs 
function Login(){
  const renderForm = (
    <div className="Login">
      <form onSubmit={handleSub}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="username" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
function handleSub(){
  
}
export default Login;



