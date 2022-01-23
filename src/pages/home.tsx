import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import Showcase from "../components/Showcase";

export default function Home(): ReactElement {
  return (
    <>
      <Showcase title="Hollywood movies" />
      <Showcase title="Documentary films" />
      <Showcase title="Action movies" />

      <div
        id="subscribe"
        className="flex flex-wrap gap-2 text-center justify-center space-x-3 mb-8"
      >
        <h2 className="w-full text-xl">Subscribe to our newsletter</h2>
        <input
          type="text"
          placeholder="your email"
          className="p-2 text-black font-semibold"
        />
        <button className="border-2 border-white py-2 px-4">Subscribe</button>
      </div>
    </>
  );
}
