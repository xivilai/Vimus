import React, { ReactElement } from "react";
import "./style.css";

export default function Footer(): ReactElement {
  return (
    <footer className="text-center pb-4">
      <ul className="social-links"></ul>

      <ul className="other-links font-semibold mb-8 max-w-[800px] mx-auto">
        <li className="p-3">Contacts</li>
        <li className="p-3">Services</li>
        <li className="p-3">Jobs</li>
        <li className="p-3">Other apps</li>
        <li className="p-3">Box office</li>
        <li className="p-3">Site index</li>
        <li className="p-3">Previews</li>
        <li className="p-3">Press room</li>
        <li className="p-3">About Us</li>
        <li className="p-3">Resources</li>
        <li className="p-3">Privacy Policy</li>
      </ul>

      <div className="copyright">
        <p>Copyright Vimus ©{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
