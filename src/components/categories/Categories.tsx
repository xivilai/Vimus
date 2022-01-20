import React, { ReactElement } from "react";

export default function Categories(): ReactElement {
  return (
    <ul className="flex whitespace-nowrap px-3 space-x-5 pb-3 mb-5 font-semibold overflow-x-scroll">
      <li>Action</li>
      <li>Horror</li>
      <li>Adventure</li>
      <li>Musicals</li>
      <li>Comedy</li>
      <li>Black Comedy</li>
      <li>Science Fiction Films</li>
    </ul>
  );
}
