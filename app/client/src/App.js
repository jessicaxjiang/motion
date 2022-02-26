import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className ="title-text">WELCOME TO MOTION !!! </div>
        <div className="content-text">The app that will help you stay organized and keep track of your tasks</div>
        <Button variant="Log-In" >Log In</Button>
        <Button className="Sign-in">Create Account</Button>
      </header>
    </div>
  );
}

export default App;
