import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import Showcase from "../components/Showcase";

export default function Home(): ReactElement {
  return (
    <>
      <Showcase title="Hollywood movies" />
      <Showcase title="Documentary films" />
      <Showcase title="Action movies" />
    </>
  );
}
