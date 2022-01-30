import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

import vimusLogo from "../../assets/images/vimus-logo.svg";
import searchIcon from "../../assets/images/search-icon.svg";

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

        <div className="search ml-auto mr-2">
          <input type="text" placeholder="Search Vimus" className="text-black rounded-sm hidden" />
          <button className="p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="scale-150"
              id="search-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </button>
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
            <Link to="/shows">Shows</Link>
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
