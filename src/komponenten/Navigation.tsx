
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav aria-label="Hauptnavigation">
      <NavLink
        to="/"
        end
        className={({ isActive }) => isActive ? 'aktiv' : ''}
      >
        Startseite
      </NavLink>

      <NavLink
        to="/wetter"
        className={({ isActive }) => isActive ? 'aktiv' : ''}
      >
        Wetter
      </NavLink>

      <NavLink
        to="/ki-berater"
        className={({ isActive }) => isActive ? 'aktiv' : ''}
      >
        KI-Berater
      </NavLink>
    </nav>
  );
}

export default Navigation;
