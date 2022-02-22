import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";

import App from "../App";
import Home from "../pages/home";
import Show from "../components/Show";
import Genre from "../components/Genre";
import NewReleases from "../pages/newReleases";
import TopShows from "../pages/topShows";

export default function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />

        <Route path="show/:showId" element={<Show />} />

        <Route path="genre/:genre" element={<Genre />} />

        <Route path="new-releases" element={<NewReleases />} />
        <Route path="coming-soon" element={<div>coming soon!</div>} />
        <Route path="top-shows" element={<TopShows />} />
        <Route path="*" element={<div>Not found! Go back!</div>} />
      </Route>
    </RouterRoutes>
  );
}
