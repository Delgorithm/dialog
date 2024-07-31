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
            <p>Welcome, {user.username}</p>
            <button type="button" onClick={logout}>
              Logout
            </button>
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
