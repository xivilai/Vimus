import React, { ReactElement } from "react";
import "./style.css";

export default function Footer(): ReactElement {
  return (
    <footer className="bg-black text-gray-400 py-4">
      <ul className="social-links"></ul>

      <ul className="other-links font-semibold mb-8 max-w-[800px] mx-auto">
        <li className="p-3">
          <a href="#0">Contacts</a>
        </li>
        <li className="p-3">
          <a href="#0">Services</a>
        </li>
        <li className="p-3">
          <a href="#0">Jobs</a>
        </li>
        <li className="p-3">
          <a href="#0">Other apps</a>
        </li>
        <li className="p-3">
          <a href="#0">Box office</a>
        </li>
        <li className="p-3">
          <a href="#0">Site index</a>
        </li>
        <li className="p-3">
          <a href="#0">Previews</a>
        </li>
        <li className="p-3">
          <a href="#0">Press room</a>
        </li>
        <li className="p-3">
          <a href="#0">About Us</a>
        </li>
        <li className="p-3">
          <a href="#0">Resources</a>
        </li>
        <li className="p-3">
          <a href="#0">Privacy Policy</a>
        </li>
      </ul>

      <div className="copyright text-center">
        <p>Copyright Vimus ©{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
