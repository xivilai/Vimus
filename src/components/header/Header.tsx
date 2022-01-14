import React, { ReactElement } from "react";
import { Link } from 'react-router-dom';

export default function Header(): ReactElement {
  return (
    <header>
      <nav>
        <div className="app-logo">
          <img src="https://placekitten.com/200/70" alt="application logo" />
        </div>

        <div className="search">
            <input type='text' placeholder='Search movies' />
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
