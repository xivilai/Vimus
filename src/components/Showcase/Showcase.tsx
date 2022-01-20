import React, { useState, ReactElement } from "react";
import { Link } from "react-router-dom";
import './style.css';

interface Props {}

export default function Showcase({}: Props): ReactElement {
  const [movies, setMovies] = useState([
    {
      title: "Crazy kittens",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Crazy kittens 2",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Soft kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Pretty kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Blue kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Soft kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Pretty kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Blue kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Soft kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Pretty kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Blue kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Soft kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Pretty kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Blue kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Soft kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Pretty kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Blue kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Soft kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Pretty kitty",
      image: "https://placekitten.com/150/80",
    },
    {
      title: "Blue kitty",
      image: "https://placekitten.com/150/80",
    },
  ]);

  return (
    <div className="showcase">
      <h2 className="showcase__title font-semibold text-lg lg:text-xl">
        New movies
      </h2>

      <ul
        className="showcase__list flex space-x-2 overflow-x-scroll"
      >
        {movies.map((movie) => (
          <li key={movie.title} className="w-[40vw] shrink-0">
            <Link to="/">
              <img src={movie.image} alt="" />
              <span className="block text-center">{movie.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
