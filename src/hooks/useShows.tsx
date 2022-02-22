import React from "react";
import axios from "axios";
import { IShow } from "../components/Show";

interface useShowsProps {
  genre?: string;
  newReleases?: boolean;
}

export default function useShows(props: useShowsProps) {
  const [shows, setShows] = React.useState<Array<IShow>>([]);

  React.useEffect(() => {
    async function getShows() {
      try {
        const response = await axios.get(getAPIURL(props));

        if (response.data.errorMessage !== null) {
          alert(response.data.errorMessage);
          return [];
        }

        return response.data.results || response.data.items;
      } catch (error) {
        console.log(error);
      }
    }

    getShows().then((shows: Array<IShow>) => {
      shows = shows.map((show) => ({
        ...show,
        image: getPosterSize(show.image),
      }));
      setShows(shows);
    });
  }, []);

  return shows;
}

function getAPIURL(config: useShowsProps) {
  const genreURL = `https://imdb-api.com/API/AdvancedSearch/k_k2rf07hj/?genres=${config.genre}`;
  if (config.genre) {
    return genreURL;
  } else if (config.newReleases) {
    return "https://imdb-api.com/en/API/InTheaters/k_k2rf07hj";
  }

  return genreURL;
}

function getPosterSize(poster: string) {
  return poster.replace("original", "300x170");
}
