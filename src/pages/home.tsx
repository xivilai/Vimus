import React, { ReactElement } from "react";
import Showcase from "../components/Showcase";

export default function Home(): ReactElement {
  return (
    <>
      <Showcase title="Action movies" keyword="action" />
      {/* <Showcase title="Comedy movies" keyword="comedy" />
      <Showcase title="Horror movies" keyword="horror" />
      <Showcase title="Documentary films" keyword="documentary" /> */}
    </>
  );
}
