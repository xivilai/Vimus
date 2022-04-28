import App from "./App";
import Home from "./pages/home";
import Show from "./components/Show";
import Genre from "./components/Genre";
import NewReleases from "./pages/newReleases";
import TopShows from "./pages/topShows";

interface IPath {
  path?: string;
  element: Function;
  index?: boolean;
  children?: Array<IPath>;
}

const routes: Array<IPath> = [
  {
    path: "/",
    element: App,
    children: [
      {
        index: true,
        element: Home,
      },
      { path: "show/:showId", element: Show },
      { path: "genre/:genre", element: Genre },
      { path: "new-releases", element: NewReleases },
      { path: "coming-soon", element: () => "coming soon" },
      { path: "top-shows", element: TopShows },
      { path: "*", element: () => "Not found! Go back" },
    ],
  },
];

export default routes;
