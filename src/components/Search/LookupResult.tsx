import React from "react";

type Props = {
  poster: string;
  title: string;
  year: number | string;
  topActors: Array<string>;
};

export default function LookupResult({
  poster,
  title,
  year,
  topActors,
}: Props) {
  return (
    <li className="m-4 flex gap-2">
      <img src={poster} alt={title} className="w-[50px]" />

      <div>
        <div className="font-bold">{title}</div>
        <div className="text-[#a3a3a3]">{year}</div>
        <div className="text-[#a3a3a3]">{topActors ? topActors.join(", ") : "unknown"}</div>
      </div>
    </li>
  );
}
