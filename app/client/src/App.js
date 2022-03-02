import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todo from './components/Todo';

const Home = () => (
  <div className="App">
    <h1>Test Page</h1>
  </div>
);

function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/todo" element={<Todo/>} />
      </Routes>
      </div>
    </Router>
  )
}

export default App;
