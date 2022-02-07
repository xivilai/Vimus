import React, { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Showcase from "../Showcase";

export interface IShow {
  id: string;
  title: string;
  image: string;
  backdrop?: string;
  year?: string;
  genres?: Array<string>;
  imDbRating?: Number;
  runtimeStr?: string;
  plot?: string;
  similars?: Array<IShow>;
}

export default function Show(): ReactElement {
  const params = useParams();
  const showId = params.showId;

  const [show, setShow] = useState<IShow>();

  useEffect(() => {
    async function getShow() {
      try {
        const response = await axios.get(
          `https://imdb-api.com/en/API/Title/k_k2rf07hj/${showId}/Posters`
        );
        const show = response.data;
        return show;
      } catch (error) {
        console.error(error);
      }
    }

    getShow().then((show) =>
      setShow({
        ...show,
        backdrop: show?.posters?.backdrops[1] && show.posters.backdrops[1].link,
      })
    );
  }, [showId]);

  return (
    <>
      <section className="show mb-8">
        <div
          className="show__backdrop -ml-3 -mr-3 bg-cover bg-center pb-[55%] mb-4"
          style={{ backgroundImage: `url(${show?.backdrop || show?.image})` }}
        ></div>
        <h1 className="show__title text-2xl font-bold">{show?.title}</h1>
        <div className="show__meta meta text-[#a3a3a3] mb-4">
          <span className="meta__genre">{show?.genres}</span>
          <span className="meta__spacer mx-1">|</span>
          <span className="meta__year">{show?.year}</span>
          <span className="meta__spacer mx-1">|</span>
          <span className="meta__rating ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="text-[#fdcc1b] mr-1 inline-block align-bottom"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            >
              <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
            </svg>
            {show?.imDbRating}/10
          </span>

          {show?.runtimeStr && (
            <>
              <span className="meta__spacer mx-1">|</span>
              <span className="meta__duration">{show.runtimeStr}</span>
            </>
          )}
        </div>
        <p className="show__description">{show?.plot}</p>
      </section>

      {show?.similars?.length && (
        <section className="similar-shows">
          <Showcase title="Similar shows" shows={show?.similars}></Showcase>
        </section>
      )}
    </>
  );
}
