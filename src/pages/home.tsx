import React, { ReactElement } from "react";
import Showcase from "../components/Showcase";
import useShows from "../hooks/useShows";

export default function Home(): ReactElement {
  const actionShows = useShows({ genre: 'action'});
  // const comedyShows = useShows('comedy');

  return (
    <>
      <Showcase title="Action movies" shows={actionShows} />
      {/* <Showcase title="Comedy movies" keyword="comedy" />
      <Showcase title="Horror movies" keyword="horror" />
      <Showcase title="Documentary films" keyword="documentary" /> */}
    </>
  );
}


