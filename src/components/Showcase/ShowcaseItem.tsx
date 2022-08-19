import React, { ReactEventHandler } from "react";
import { Link } from "react-router-dom";
import { textEllipsis } from "../../utils/text";
import { getResizedImageUrl } from "../../utils/image";

interface IShowcaseItem {
  id: string;
  title: string;
  image: string;
  onLoad: ReactEventHandler<HTMLImageElement>;
}

export default function ShowcaseItem({
  id,
  title,
  image,
  onLoad,
}: IShowcaseItem) {
  return (
    <li className="shrink-0 max-w-[300px]" title={title}>
      <Link to={`/show/${id}`}>
        <img src={getResizedImageUrl(image)} alt={title} onLoad={onLoad} className='h-[65vw] md:h-[35vw] w-full max-h-[445px]' />
        <span className="block text-center">{textEllipsis(title, 33)}</span>
      </Link>
    </li>
  );
}
