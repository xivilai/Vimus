import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import { IShow } from "../Show";

interface Props {
  shows: Array<IShow>;
  title: string;
}

export default function Showcase({ shows, title }: Props): ReactElement {
  return (
    <div className="showcase mb-8">
      <h2 className="showcase__title font-semibold text-lg lg:text-xl mb-2">
        {title}
      </h2>

      <ul className="showcase__list flex space-x-2 overflow-x-scroll">
        {shows.map((show, index) => (
          <li key={index} className="w-[40vw] shrink-0 max-w-[300px]">
            <Link to={`/show/${show.id}`}>
              <img src={show.image} alt="" />
              <span className="block text-center">{show.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}