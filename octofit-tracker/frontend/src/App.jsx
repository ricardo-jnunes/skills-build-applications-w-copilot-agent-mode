import './App.css'
import octofitLogo from '../../../docs/octofitapp-small.png'

function App() {
  return (
    <main className="container py-5">
      <section className="row align-items-center g-4">
        <div className="col-lg-7">
          <p className="text-uppercase fw-semibold text-primary">OctoFit Tracker</p>
          <h1 className="display-5 fw-bold mb-3">A modern multi-tier fitness platform</h1>
          <p className="lead text-muted">
            Track workouts, foster team challenges, and keep your personal goals moving
            forward with a polished React and Express experience.
          </p>
          <div className="d-flex gap-3 mt-4">
            <a className="btn btn-primary btn-lg" href="https://vite.dev/" target="_blank" rel="noreferrer">
              Explore the stack
            </a>
            <a className="btn btn-outline-secondary btn-lg" href="https://expressjs.com/" target="_blank" rel="noreferrer">
              View backend API
            </a>
          </div>
        </div>
        <div className="col-lg-5 text-center">
          <img src={octofitLogo} alt="OctoFit Tracker logo" className="img-fluid rounded shadow" />
        </div>
      </section>
    </main>
  )
}

export default App
