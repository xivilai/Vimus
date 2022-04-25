import React from "react";
import { Link } from "react-router-dom";

type Props = {
  id: string,
  poster: string;
  title: string;
  year: number | string;
  topActors: Array<string>;
};

export default function LookupResult({
  id,
  poster,
  title,
  year,
  topActors,
}: Props) {
  return (
    <li className="p-4 hover:bg-gray-700 transition-colors relative after:block after:border-t after:w-full after:absolute after:bottom-0 after:left-0 after:border-gray-400 hover:cursor-pointer">
      <Link to={`/show/${id}`} className='flex gap-2'>
        <img src={poster} alt={title} className="w-[50px]" />
        <div>
          <div className="font-bold">{title}</div>
          <div className="text-[#a3a3a3]">{year}</div>
          <div className="text-[#a3a3a3]">{topActors ? topActors.join(", ") : "unknown"}</div>
        </div>
      </Link>
    </li>
  );
}
