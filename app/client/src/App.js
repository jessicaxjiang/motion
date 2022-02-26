import './App.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
function App() {
  return (
    <div className="App">
      <Button component={Link} to="/calendar">Calendar</Button>
    </div>
  );
}

export default App;