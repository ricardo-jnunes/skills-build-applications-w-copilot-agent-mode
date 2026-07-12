import { useEffect, useState } from 'react';
import { getApiUrl } from '../utils/api';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`${getApiUrl('users')}`);
        if (!response.ok) {
          throw new Error('Unable to load users');
        }
        const payload = await response.json();
        const items = Array.isArray(payload) ? payload : payload.users ?? payload.results ?? [];
        setUsers(items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users…</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <section>
      <h2>Users</h2>
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item" key={user._id || user.id || user.email}>
            <strong>{user.name || user.email}</strong>
            {user.fitnessGoal ? <div>{user.fitnessGoal}</div> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Users;
