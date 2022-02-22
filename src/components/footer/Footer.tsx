import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function Footer(): ReactElement {
  return (
    <footer className="bg-black text-gray-400 py-4">
      <ul className="social-links"></ul>

      <ul className="other-links font-semibold mb-8 max-w-[800px] mx-auto">
        {links.map((lnk, i) => (
          <Link to={lnk.to} key={i} className="p-3">
            {lnk.label}
          </Link>
        ))}
      </ul>

      <div className="copyright text-center">
        <p>Copyright Vimus ©{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

const links = [
  { label: "Contacts", to: "/contacts" },
  { label: "Services", to: "/services" },
  { label: "Jobs", to: "/jobs" },
  { label: "Other apps", to: "/other-apps" },
  { label: "Box office", to: "/box-office" },
  { label: "Site index", to: "/site-index" },
  { label: "Previews", to: "/previews" },
  { label: "Press room", to: "/press-room" },
  { label: "About Us", to: "/about-us" },
  { label: "Resources", to: "/resources" },
  { label: "Privacy Policy", to: "/privacy-policy" },
];
