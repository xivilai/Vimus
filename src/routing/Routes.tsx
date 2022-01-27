import React from "react";
import App from "../App";
import Home from "../pages/home";
import Show from "../components/Show";
import Shows from "../components/Shows";
import Genre from "../components/Genre";
import { Route, Routes as RouterRoutes } from "react-router-dom";

export default function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />

        <Route path="shows" element={<Shows />}>
          <Route path=":showId" element={<Show />} />
        </Route>

        <Route path="genre/:genre" element={<Genre />} />

        <Route path="new-releases" element={<div>new releases!</div>} />
        <Route path="coming-soon" element={<div>coming soon!</div>} />
        <Route path="*" element={<div>Not found! Go back!</div>} />
      </Route>
    </RouterRoutes>
  );
}
