import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import vimusLogo from '../../assets/images/vimus-logo.svg';

export default function Header(): ReactElement {
  return (
    <header>
      <nav>
        <div id="app-header-logo" className="app-logo w-28">
          <Link to='/'>
            <img src={vimusLogo} alt='Vimus logo' />
          </Link>
        </div>

        <div className="search">
          <input type="text" placeholder="Search movies" />
          <button>🔍</button>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/movies">Movies</Link>
          </li>

          <li>
            <Link to="/new-releases">New releases</Link>
          </li>

          <li>
            <Link to="/coming-soon">Coming soon</Link>
          </li>

          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
