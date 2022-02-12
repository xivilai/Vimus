import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function Categories(): ReactElement {
  return (
    <ul className="flex whitespace-nowrap px-3 space-x-5 py-3 bg-[#4a4a4a40] mb-5 font-semibold overflow-x-auto scroll-smooth">
      {links.map((lnk, i) => (
        <Link to={lnk.to} key={i}>
          {lnk.label}
        </Link>
      ))}
    </ul>
  );
}

const links = [
  {
    label: "Action",
    to: "/genre/action",
  },
  {
    label: "Horror",
    to: "/genre/horror",
  },
  {
    label: "Adventure",
    to: "/genre/adventure",
  },
  {
    label: "Musical",
    to: "/genre/musical",
  },
  {
    label: "Comedy",
    to: "/genre/comedy",
  },
  {
    label: "Science Fiction",
    to: "/genre/sci-fi",
  },
  {
    label: "Documentary",
    to: "/genre/documentary",
  },
  {
    label: "Drama",
    to: "/genre/drama",
  },
  {
    label: "History",
    to: "/genre/history",
  },
];
