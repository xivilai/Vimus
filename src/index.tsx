import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from './pages/home';
import reportWebVitals from "./reportWebVitals";
import Movie from "./components/Movie";
import Movies from "./components/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route index element={<p>Select an movie</p>} />
            <Route path=":movieId" element={<Movie />} />
          </Route>
          <Route path="new-releases" element={<div>new releases!</div>} />
          <Route path="coming-soon" element={<div>coming soon!</div>} />
          <Route path="*" element={<div>Not found! Go back!</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
