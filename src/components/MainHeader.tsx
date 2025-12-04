import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const MainHeader: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">🧭</div>
          <span>Gezi Yolu</span>
        </Link>

        <nav>
          <ul className="nav-menu">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Ana Sayfa
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kesfet"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Keşfet
              </NavLink>
            </li>
            <li>
              <a href="#">Harita</a>
            </li>
            <li>
              <a href="#">Rehberler</a>
            </li>
            <li>
              <a href="#">İletişim</a>
            </li>
          </ul>
        </nav>

        <div className="user-section">
          <Link to="/profil" className="user-avatar">
            TC
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;

