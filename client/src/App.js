import './App.css';
import ApplicationViews from './Components/ApplicationView';
import NavBar from './Components/nav/NavBar';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar />
      <ApplicationViews />
    </Router>
  );
}

export default App;
