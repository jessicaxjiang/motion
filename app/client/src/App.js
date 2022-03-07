import logo from './image1.png';
import './App.css';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todo from './components/Todo';
import Calendar from './components/Calendar';
import Login from './components/Login/Login';
import SignUp from './components/CreateAccount/SignUp';
import Boards from './components/Boards/boards';

const Home = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="title-text"> Motion </div>
      <div className="content-text"><p> The app that will help you stay organized and keep track of your tasks. Stay up to date with your due dates!!</p></div>
      <div className="Boards"><Button variant="boards" to="/Boards">Go To Your Boards</Button></div>
    </header>
  </div>
);

function App() {
  return (
    <div className="App">
      <div className="login-header">
        <div className="Log-In"><Button variant="Log-In" to="/Login">Log In</Button></div>
        <div className="Sign-In"><Button variant="Sign-Up" to="/SignUp">Create Account</Button></div>
      </div>
      <div>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/calendar" element={<Calendar />} />
              // adding the routes for the login , sign up and Go to boards buttons 
              <Route path="/Login" element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Boards" element={<Boards />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}
export default App;