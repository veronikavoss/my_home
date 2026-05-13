import { NavLink, Link } from 'react-router-dom';
import { Home, Film, LayoutGrid } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar pop-card">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">MySpace</span>
        </Link>
        <nav className="navbar-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <Home size={18} />
            <span>Home</span>
          </NavLink>
          <NavLink to="/watchlist" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <Film size={18} />
            <span>Watchlist</span>
          </NavLink>
          <NavLink to="/apps" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <LayoutGrid size={18} />
            <span>Apps</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
