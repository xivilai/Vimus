import React, { ReactElement, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import AppLogo from "../AppLogo";
import { Searchbar } from "../Search";
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
  const location = useLocation();

  React.useEffect(() => {
    setMenuVisible(false);
  }, [location]);

  return (
    <header className="relative bg-black/75">
      <nav className="h-14 max-w-screen-xl mx-auto flex justify-between items-center">
        <AppLogo id="app-header-logo" className="w-28" />

        <Searchbar />

        <HeaderLinksList menuVisible={menuVisible}>
          {links.map((lnk, i) => (
            <li key={i}>
              <Link to={lnk.to}>{lnk.label}</Link>
            </li>
          ))}
        </HeaderLinksList>

        <button
          onClick={() => setMenuVisible(!menuVisible)}
          className="nav-menu-toggle sm:hidden z-10 mr-4"
        >
          <BurgerIcon />
        </button>
      </nav>
    </header>
  );
}
