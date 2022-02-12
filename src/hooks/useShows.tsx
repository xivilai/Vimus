import React from 'react';
import axios from "axios";
import { IShow } from '../components/Show';

export default function useShows(genre : string) {
    const [shows, setShows] = React.useState<Array<IShow>>([]);

  React.useEffect(() => {
    async function getShows() {
      try {
        const response = await axios.get(
          `https://imdb-api.com/API/AdvancedSearch/k_k2rf07hj/?genres=${genre}`
        );

        return response.data.results;
      } catch (error) {
        console.log(error);
      }
    }

    getShows().then((shows: Array<IShow>) => {
      shows = shows.map((show) => ({ ...show, image: getPosterSize(show.image) }));
      setShows(shows);
    });
  }, [genre]);

  return shows;
}

function getPosterSize(poster: string) {
    return poster.replace("original", "300x170");
  }
