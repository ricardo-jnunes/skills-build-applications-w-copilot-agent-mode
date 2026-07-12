import { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchTeams() {
      try {
        const apiUrl = import.meta.env.VITE_CODESPACE_NAME
          ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
          : 'http://localhost:8000/api/teams/';
        const response = await fetch(apiUrl);
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
