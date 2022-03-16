import logo from './image1.png';
import './App.css';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todo from './components/Todo';
import Calendar from './components/Calendar';
import AddTodo from './components/AddTodo';
import AddEvent from './components/addEvent';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';
import TaskToCalendar from './components/taskToCalendar';

const Home = () => (
  <div className="Home">
      <header className="App-header">
        <div className="login-button"><Button href="/login">Log In</Button></div>
        <div className="create-account-button"><Button href="/signup">Create Account</Button></div>
        <div className="home-title-text"> <a href='/'>Motion</a> </div>
        <img src={logo} className="App-logo" alt="logo"/>
        <div className="home-subtitle-text"><p>The tool to put your plans in motion</p></div>
        <div className="home-content-text"><p>Manage and visualize your tasks to achieve maximum productivity</p></div>
        <div id="signup-wrapper">
          <input id="username" type="text" className="input" placeholder="Username"></input>
          <div className="create-account-button2"><Button href="/signup">Sign up!</Button></div>
        </div>
      </header>
  </div>
);

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/toDo" element={<Todo />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/addToDo" element={<AddTodo/>} />
              <Route path="/addEvent" element = {<AddEvent />} />
              <Route path="/signUp" element = {<SignUp />} />
              <Route path="/login" element = {<Login />} />
              <Route path="/taskToCalendar" element = {<TaskToCalendar />} />
              <Route path="/*" element = {<ErrorPage />} />
            </Routes>
          </div>
        </Router>
      </div>
      </div>
  );
}
export default App;