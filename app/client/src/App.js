import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="Log-In"><Button variant="Log-In" >Log In</Button></div>
       <div className="Sign-In"><Button variant="Sign-in">Create Account</Button></div>
        <img src={logo} className="App-logo" alt="logo" />
        <div className ="title-text">WELCOME TO MOTION !!! </div>
        <div className="content-text">The app that will help you stay organized and keep track of your tasks</div>
        <div className="Boards"><Button variant="boards">Go To Your Boards</Button></div>
      </header>
    </div>
  );
}

export default App;
