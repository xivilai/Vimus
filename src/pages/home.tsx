import React, { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <>
      <div className="showcase">
        <h2 className="showcase__title">Showcase title 1</h2>

        <ul className="showcase__list"></ul>
      </div>

      <div id="subscribe">
        <h2>Subscribe to our newsletter</h2>
        <input type="text" placeholder="your email" />
        <button>Subscribe</button>
      </div>
    </>
  );
}
