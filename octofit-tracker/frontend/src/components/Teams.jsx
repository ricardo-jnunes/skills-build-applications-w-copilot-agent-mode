import { useEffect, useState } from 'react';
import { getApiUrl } from '../utils/api';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await fetch(`${getApiUrl('teams')}`);
        if (!response.ok) {
          throw new Error('Unable to load teams');
        }
        const payload = await response.json();
        const items = Array.isArray(payload) ? payload : payload.teams ?? payload.results ?? [];
        setTeams(items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTeams();
  }, []);

  if (loading) return <p>Loading teams…</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <section>
      <h2>Teams</h2>
      <ul className="list-group">
        {teams.map((team) => (
          <li className="list-group-item" key={team._id || team.id || team.name}>
            <strong>{team.name}</strong>
            {team.sport ? <div>{team.sport}</div> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Teams;
