import React, { ReactEventHandler } from "react";
import { Link } from "react-router-dom";
import { textEllipsis } from "../../utils/text";
import { getResizedImageUrl } from "../../utils/image";

interface IShowcaseItem {
  id: string;
  title: string;
  image: string;
}

export default function ShowcaseItem({ id, title, image }: IShowcaseItem) {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const isLoading = !imageLoaded;

  return (
    <>
      {/* Return skeleton while the image is loading */}
      {isLoading && <ShowcaseItemPlaceholder />}
      <li className="shrink-0 max-w-[300px]" title={title} hidden={imageLoaded ? false : true}>
        <Link to={`/show/${id}`}>
          <img
            onLoad={() => {
              console.log("loaded image");
              setImageLoaded(true);
            }}
            src={getResizedImageUrl(image)}
            alt={title}
            className="h-[65vw] md:h-[35vw] w-full max-h-[445px]"
          />
          <span className="block text-center">{textEllipsis(title, 33)}</span>
        </Link>
      </li>
    </>
  );
}

export const ShowcaseItemPlaceholder = () => {
  return (
    <li className="shadow shrink-0 max-w-[300px] w-[48vw]">
      <div className="animate-pulse">
        <div className="bg-gray-700 rounded rounded-sm h-[65vw] md:h-[35vw] w-full max-h-[445px]"></div>
        <div className="h-4 bg-gray-700 rounded rounded-sm mt-2"></div>
      </div>
    </li>
  );
};
