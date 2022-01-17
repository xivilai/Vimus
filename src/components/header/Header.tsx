import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

import vimusLogo from "../../assets/images/vimus-logo.svg";

export default function Header(): ReactElement {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className="h-14">
      <nav className="flex justify-between items-center pr-4">
        <div id="app-header-logo" className="app-logo w-28">
          <Link to="/">
            <img src={vimusLogo} alt="Vimus logo" />
          </Link>
        </div>

        <div className="search hidden">
          <input type="text" placeholder="Search movies" />
          <button>🔍</button>
        </div>

        <ul
          className={`nav-menu flex flex-col space-x-3 mr-4 ${
            menuVisible ? "" : "hidden"
          }`}
        >
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

        <div
          className="nav-menu-toggle lg:hidden"
          onClick={() => setMenuVisible(!menuVisible)}
        >
          <div className="space-y-2">
            <div className="w-8 h-0.5 bg-gray-600"></div>
            <div className="w-8 h-0.5 bg-gray-600"></div>
            <div className="w-8 h-0.5 bg-gray-600"></div>
          </div>
        </div>
      </nav>
    </header>
  );
}
