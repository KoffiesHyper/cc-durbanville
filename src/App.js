import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import HomePage from "./pages/HomePage/home-page";
import SOF from "./pages/SOF/sof";
import Team from "./pages/Team/team";
import Giving from "./pages/Giving/giving";

import NavBar from './components/NavBar/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/statement-of-faith'} element={<SOF />} />
          <Route path={'/team'} element={<Team />} />
          <Route path={'/giving'} element={<Giving />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
