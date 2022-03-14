import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

import AppLogo from "../AppLogo";
import Search from "../Search";
import HeaderLinksList from "./HeaderLinksList";
import BurgerIcon from "../icons/Burger";

const links = [
  {
    to: "/top-shows",
    label: "Top Shows",
  },
  {
    to: "/new-releases",
    label: "New Releases",
  },
  {
    to: "/coming-soon",
    label: "Coming Soon",
  },
  {
    to: "/about-us",
    label: "About Us",
  },
];

export default function Header(): ReactElement {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className="relative">
      <nav className="h-14 bg-black/75 flex justify-between items-center">
        <AppLogo id="app-header-logo" className="w-28" />

        <Search />

        <HeaderLinksList menuVisible={menuVisible}>
          {links.map((lnk, i) => (
            <li key={i}>
              <Link to={lnk.to}>{lnk.label}</Link>
            </li>
          ))}
        </HeaderLinksList>

        <button
          onClick={() => setMenuVisible(!menuVisible)}
          className="nav-menu-toggle sm:hidden z-20 mr-4"
        >
          <BurgerIcon />
        </button>
      </nav>
    </header>
  );
}
