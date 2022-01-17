import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import Showcase from "../components/Showcase";

export default function Home(): ReactElement {
  return (
    <>
      
      <Showcase />
      
      <div id="subscribe">
        <h2>Subscribe to our newsletter</h2>
        <input type="text" placeholder="your email" />
        <button>Subscribe</button>
      </div>
    </>
  );
}
