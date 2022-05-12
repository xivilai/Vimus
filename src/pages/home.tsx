import React, { ReactElement } from "react";
import Showcase from "../components/Showcase";
import useShows from "../hooks/useShows";

export default function Home(): ReactElement {
  const actionShows = useShows({ genre: 'action'});
  const comedyShows = useShows({ genre: 'comedy'});
  const horrorShows = useShows({ genre: 'horror'});
  const documentaryShows = useShows({ genre: 'documentary'});

  return (
    <>
      <Showcase title="Action movies" shows={actionShows} />
      <Showcase title="Comedy movies" shows={comedyShows} />
      <Showcase title="Horror movies" shows={horrorShows} />
      <Showcase title="Documentary films" shows={documentaryShows} />
    </>
  );
}


