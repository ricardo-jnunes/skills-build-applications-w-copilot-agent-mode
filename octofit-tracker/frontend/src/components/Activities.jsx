import { useEffect, useState } from 'react';
import { getApiUrl } from '../utils/api';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchActivities() {
      try {
        const response = await fetch(`${getApiUrl('activities')}`);
        if (!response.ok) {
          throw new Error('Unable to load activities');
        }
        const payload = await response.json();
        const items = Array.isArray(payload) ? payload : payload.activities ?? payload.results ?? [];
        setActivities(items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchActivities();
  }, []);

  if (loading) return <p>Loading activities…</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <section>
      <h2>Activities</h2>
      <ul className="list-group">
        {activities.map((activity) => (
          <li className="list-group-item" key={activity._id || activity.id || activity.type}>
            <strong>{activity.type}</strong>
            {activity.durationMinutes ? <div>{activity.durationMinutes} min</div> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Activities;
