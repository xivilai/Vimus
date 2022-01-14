import React, { ReactElement } from "react";
import { NavLink, Outlet, useSearchParams, useNavigate } from "react-router-dom";

let movies = [
  {
    name: "Will hunting",
    number: 1995,
    amount: "$24,000",
    due: "10/31/2000",
  },
  {
    name: "Forest gamp",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "12 Angry men",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "Fly over a cookooss",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/2998",
  },
];

export default function Movies(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <input
        value={searchParams.get("filter") || ""}
        type='text'
        onChange={(event) => {
          let filter = event.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />

      {movies.filter((movie) => { 
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = movie.name.toLowerCase();
          return name.toLowerCase().includes(filter.toLowerCase());
       }).map((movie, i) => (
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
          to={`/movies/${movie.number}`}
          key={i}
        >
          {movie.name}
        </NavLink>
      ))}

      <Outlet />
    </>
  );
}
