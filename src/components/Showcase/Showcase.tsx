import React, { ReactElement } from "react";
import { Link } from 'react-router-dom';

interface Props {}

export default function Showcase({}: Props): ReactElement {
  return (
    <div className="showcase">
      <h2 className="showcase__title">New movies</h2>

      <ul className="showcase__list">
        <li>
          <Link to="/">Movie #1</Link>
        </li>
      </ul>
    </div>
  );
}
