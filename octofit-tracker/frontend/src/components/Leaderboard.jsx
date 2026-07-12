import { useEffect, useState } from 'react';
import { getApiUrl } from '../utils/api';

function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const response = await fetch(`${getApiUrl('leaderboard')}`);
        if (!response.ok) {
          throw new Error('Unable to load leaderboard');
        }
        const payload = await response.json();
        const items = Array.isArray(payload) ? payload : payload.entries ?? payload.results ?? [];
        setEntries(items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchLeaderboard();
  }, []);

  if (loading) return <p>Loading leaderboard…</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <section>
      <h2>Leaderboard</h2>
      <ul className="list-group">
        {entries.map((entry) => (
          <li className="list-group-item" key={entry._id || entry.id || entry.rank}>
            <strong>Rank {entry.rank}</strong>
            {entry.score ? <div>Score: {entry.score}</div> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Leaderboard;
