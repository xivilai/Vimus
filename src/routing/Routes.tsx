import React from "react";
import App from "../App";
import Home from "../pages/home";
import Movie from "../components/Movie";
import Movies from "../components/Movies";
import Genre from "../components/Genre";
import { Route, Routes as RouterRoutes } from "react-router-dom";

export default function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />

        <Route path="movies" element={<Movies />}>
          <Route index element={<p>Select an movie</p>} />
          <Route path=":movieId" element={<Movie />} />
        </Route>

        <Route path="genre/:genre" element={<Genre />} />

        <Route path="new-releases" element={<div>new releases!</div>} />
        <Route path="coming-soon" element={<div>coming soon!</div>} />
        <Route path="*" element={<div>Not found! Go back!</div>} />
      </Route>
    </RouterRoutes>
  );
}
