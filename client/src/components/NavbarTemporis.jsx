import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

function Navbar() {
  const { user, logout, error } = useAuth();

  return (
    <nav>
      <ul className="flex gap-5 bg-blue-400 p-5">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <p>Welcome {user.username}</p>
            </li>
            <li>
              <Link to={`/dashboard/profile/${user.id}`}>Profil</Link>
            </li>
            <li>
              <button type="button" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register">Inscription</Link>
            </li>
            <li>
              <Link to="/login">Se connecter</Link>
            </li>
          </>
        )}
      </ul>
      {error && <p>Error: {error}</p>}
    </nav>
  );
}

export default Navbar;
