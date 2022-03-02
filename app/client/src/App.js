import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todo from './components/Todo';
import Calendar from './components/Calendar';

const Home = () => (
  <div className="App">
    <h1>Test Page</h1>
    <Button component={Link} to="/calendar">Calendar</Button>
  </div>
);

function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/todo" element={<Todo/>} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App;