import React from "react";
import { Link } from "react-router-dom";
import vimusLogo from "../assets/images/vimus-logo.svg";

export default function AppLogo(props : any) {
  return (
    <div id="app-header-logo" className={`app-logo ${props.className}`}>
      <Link to="/">
        <img src={vimusLogo} alt="Vimus logo" />
      </Link>
    </div>
  );
}
