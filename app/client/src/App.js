import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
      <Button component={Link} to="/calendar">Calendar</Button>
      </div>
    </div>
  );
}

export default App;
