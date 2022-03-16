import React from "react";
import './SignUp.css';


// creating the form of the login page which will have username and 
// password inputs 
// function SignUp(){
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

function SignUp(props) {

  const Fname = React.useRef(null);
  const Lname = React.useRef(null);
  const Email = React.useRef(null);
  const password = React.useRef(null);
  const handleSubmit = error => {
    error.preventDefault();
  };

  return (
    <div className = "SignUp">

     <form onSubmit={handleSubmit}>
       <input type="text" placeholder="First Name" ref={Fname} />
       <input type="text" placeholder="Last Name" ref={Lname} />
       <input type="text" placeholder="Email Address" ref={Email} />
       <input type="password" placeholder="password" ref={password} />
       <button type="submit" className="myButton">Create Account </button>
     </form>
     </div> 
   );
}

export default SignUp;