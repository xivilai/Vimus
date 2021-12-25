import React, { ReactElement } from "react";

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
                <a href="/new-releases">New releases</a>
            </li>

            <li>
                <a href="/coming-soon">Coming soon</a>
            </li>

            <li>
                <a href="/about-us">About Us</a>
            </li>
        </ul>
      </nav>
    </header>
  );
}
