import React from "react";
import './Login.css';

// creating the form of the login page which will have username and 
// password inputs 
// function Login(){
//   const renderForm = (
//     <div className="Login">
//       <form onSubmit={handleSub}>
//         <div className="input-container">
//           <label>Username </label>
//           <input type="text" name="username" required />
//         </div>
//         <div className="input-container">
//           <label>Password </label>
//           <input type="password" name="password" required />
//         </div>
//         <div className="button-container">
//           <input type="submit" />
//         </div>
//       </form>
//     </div>
//   );
// }
// function handleSub(){
  
// }

// Now creating login function with react component props
function Login(props) {

  const username = React.useRef(null);
  const userpassword = React.useRef(null);
  const handleSubmit = error => {
    error.preventDefault();
  };

  return (
    <div className = "Login">
     <form onSubmit={handleSubmit}>
       <input type="text" placeholder="username" ref={username} />
       <input type="password" placeholder="password" ref={userpassword} />
       <button type="submit" className="myButton">Login</button>
     </form>
     </div>
   );
}

export default Login;



