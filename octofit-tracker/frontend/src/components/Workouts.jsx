import { useEffect, useState } from 'react';
import { getApiUrl } from '../utils/api';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchWorkouts() {
      try {
        const response = await fetch(`${getApiUrl('workouts')}`);
        if (!response.ok) {
          throw new Error('Unable to load workouts');
        }
        const payload = await response.json();
        const items = Array.isArray(payload) ? payload : payload.workouts ?? payload.results ?? [];
        setWorkouts(items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWorkouts();
  }, []);

  if (loading) return <p>Loading workouts…</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <section>
      <h2>Workouts</h2>
      <ul className="list-group">
        {workouts.map((workout) => (
          <li className="list-group-item" key={workout._id || workout.id || workout.name}>
            <strong>{workout.name}</strong>
            {workout.category ? <div>{workout.category}</div> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Workouts;
