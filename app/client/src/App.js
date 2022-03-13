import logo from './image1.png';
import './App.css';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todo from './components/Todo';
import Calendar from './components/Calendar';
import AddTodo from './components/AddTodo';
import AddEvent from './components/addEvent';

const Home = () => (
  <div className="App">
    <header className="App-header">
      <div className="Log-In"><Button>Log In</Button></div>
      <div className="Sign-In"><Button>Create Account</Button></div>
      <img src={logo} className="App-logo" alt="logo" />
      <div className="title-text"> <a href='/'>Motion</a> </div>
      <div className="content-text"><p> The app that will help you stay organized and keep track of your tasks. Stay up to date with your due dates!!</p></div>
      <div className="Boards"><Button href="/calendar">Go To Your Calendar</Button></div>
      <div className="Tasks"><Button href="/todo">Go To Your Tasks</Button></div>
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
              <Route path="/todo" element={<Todo />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/addTodo" element={<AddTodo/>} />
              <Route path="/addEvent" element = {<AddEvent />} />
            </Routes>
          </div>
        </Router>
      </div>
      </div>
  );
}
export default App;