import React, { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export interface IShow {
  id: string;
  title: string;
  image: string;
  backdrop?: string;
  year?: string;
  genres?: Array<string>;
  imDbRating?: Number;
  runtimeStr?: string;
  description?: string;
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
    <section className="show">
      <div
        className="show__backdrop -ml-3 -mr-3 bg-cover bg-center pb-[55%] mb-4"
        style={{ backgroundImage: `url(${show?.backdrop})` }}
      ></div>
      <h1 className="show__title text-2xl font-bold">{show?.title}</h1>

      <div className="show__meta meta text-[#a3a3a3]">
        <span className="meta__genre">
          {show?.genres}
        </span>

        <span className="meta__spacer mx-1">|</span>

        <span className="meta__year">
          {show?.year}
        </span>

        <span className="meta__spacer mx-1">|</span>

        <span className="meta__rating">
          {show?.imDbRating}
        </span>

        <span className="meta__spacer mx-1">|</span>

        <span className="meta__duration">
          {show?.runtimeStr}
        </span>
      </div>
    </section>
  );
}
