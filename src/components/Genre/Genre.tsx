import React from "react";
import { useParams } from "react-router-dom";
import Showcase from "../Showcase";
import useShows from '../../hooks/useShows';

export default function Genre() {
  const params = useParams();
  const genre = params.genre || '';

  const shows = useShows(genre);


  if (genre === "" || typeof genre === "undefined") {
    return <p>Invalid category</p>;
  }

  const showcaseTitle = `${
    genre[0].toUpperCase() + genre?.slice(1, genre.length)
  } movies`;

  return <Showcase title={showcaseTitle} shows={shows} />;
}
