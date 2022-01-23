import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

import vimusLogo from "../../assets/images/vimus-logo.svg";

export default function Header(): ReactElement {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header>
      <nav className="h-14 bg-black/75 flex justify-between items-center pr-4">
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
          className={`
            nav-menu
            transition-{max-height, padding}
            duration-500
            flex
            p-4
            sm:p-0
            flex-col
            sm:flex-row
            absolute
            sm:static
            top-0
            bg-black
            w-full
            text-white
            overflow-hidden 
            text-xl
            space-y-3
            ${menuVisible ? "max-h-screen" : "max-h-0 py-0"}
            sm:max-h-screen
            sm:space-x-6
            sm:space-y-0
            sm:justify-end
          `}
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
          className="nav-menu-toggle sm:hidden z-20"
          onClick={() => setMenuVisible(!menuVisible)}
        >
          <div className="space-y-2">
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
          </div>
        </div>
      </nav>
    </header>
  );
}
