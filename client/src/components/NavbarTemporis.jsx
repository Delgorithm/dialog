import { Link } from "react-router-dom";

function NavbarTemporis() {
  return (
    <nav>
      <ul className="flex gap-5 bg-blue-400 p-5">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/register">Inscription</Link>
        </li>
        <li>
          <Link to="/login">Se connecter</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarTemporis;
