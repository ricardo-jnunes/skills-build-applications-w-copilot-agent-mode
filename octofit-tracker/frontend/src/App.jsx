import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import octofitLogo from '../../../docs/octofitapp-small.png';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <main className="container py-5">
      <section className="row align-items-center g-4 mb-4">
        <div className="col-lg-7">
          <p className="text-uppercase fw-semibold text-primary">OctoFit Tracker</p>
          <h1 className="display-5 fw-bold mb-3">A modern multi-tier fitness platform</h1>
          <p className="lead text-muted">
            Track workouts, foster team challenges, and keep your personal goals moving
            forward with a polished React and Express experience.
          </p>
          <p className="text-muted small">
            Define VITE_CODESPACE_NAME in .env.local for Codespaces support. If it is unset,
            the app falls back to localhost.
          </p>
        </div>
        <div className="col-lg-5 text-center">
          <img src={octofitLogo} alt="OctoFit Tracker logo" className="img-fluid rounded shadow" />
        </div>
      </section>

      <nav className="nav nav-pills flex-wrap gap-2 mb-4">
        <NavLink className="nav-link" to="/users">Users</NavLink>
        <NavLink className="nav-link" to="/activities">Activities</NavLink>
        <NavLink className="nav-link" to="/teams">Teams</NavLink>
        <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
        <NavLink className="nav-link" to="/workouts">Workouts</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </main>
  );
}

export default App;
