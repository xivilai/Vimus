import React, { useState, ReactElement } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

import { IShow } from "../Show";

interface Props {
  title: string;
  keyword: string;
}

export default function Showcase({ title, keyword }: Props): ReactElement {
  const [shows, setShows] = useState<Array<IShow>>([]);

  React.useEffect(() => {
    async function getShows() {
      try {
        const response = await axios.get(
          `https://imdb-api.com/en/API/SearchTitle/k_k2rf07hj/${keyword}`
        );

        return response.data.results;
      } catch (error) {
        console.log(error);
      }
    }

    getShows().then((shows: Array<IShow>) => {
      shows = shows.map((show) => ({ ...show, image: getPosterSize(show.image) }));
      console.log(shows);
      setShows(shows);
    });
  }, [keyword]);

  return (
    <div className="showcase mb-8">
      <h2 className="showcase__title font-semibold text-lg lg:text-xl mb-2">
        {title}
      </h2>

      <ul className="showcase__list flex space-x-2 overflow-x-scroll">
        {shows.map((show, index) => (
          <li key={index} className="w-[40vw] shrink-0 max-w-[300px]">
            <Link to="/">
              <img src={show.image} alt="" />
              <span className="block text-center">{show.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function getPosterSize(poster: string) {
  return poster.replace("original", "300x170");
}
