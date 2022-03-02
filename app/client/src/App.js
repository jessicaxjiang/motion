import logo from './image1.png';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="Log-In"><Button variant="Log-In" >Log In</Button></div>
       <div className="Sign-In"><Button variant="Sign-in">Create Account</Button></div>
        <img src={logo} className="App-logo" alt="logo" />
        <div className ="title-text"> Motion </div>
        <div className="content-text"><p> The app that will help you stay organized and keep track of your tasks. Stay up to date with your due dates!!</p></div>
        <div className="Boards"><Button variant="boards">Go To Your Boards</Button></div>
      </header>
    </div>
  );
}

export default App;
