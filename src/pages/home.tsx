import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import Showcase from "../components/Showcase";

export default function Home(): ReactElement {
  return (
    <>
      <div className='px-3'>
        <Showcase title='Hollywood movies' />
        <Showcase title='Documentary films' />
        <Showcase title='Action movies' />
        
        <div id="subscribe">
          <h2>Subscribe to our newsletter</h2>
          <input type="text" placeholder="your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </>
  );
}
