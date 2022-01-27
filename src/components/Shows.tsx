import React, { ReactElement } from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

let shows = [
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

export default function Shows(): ReactElement {
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

      {shows.filter((show) => { 
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = show.name.toLowerCase();
          return name.toLowerCase().includes(filter.toLowerCase());
       }).map((show, i) => (
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
          to={`/shows/${show.number}`}
          key={i}
        >
          {show.name}
        </NavLink>
      ))}

      <Outlet />
    </>
  );
}
