import React from "react";

type Props = {
  children: React.ReactChild[],
  menuVisible: Boolean
};

export default function HeaderLinksList({children, menuVisible}: Props) {
  return (
    <ul
      className={`
            nav-menu
            transition-{max-height, padding}
            duration-500
            flex
            p-4
            sm:p-0
            flex-col
            sm:flex-row
            absolute
            sm:static
            top-0
            bg-black
            sm:bg-transparent
            w-full
            lg:w-auto
            lg:mr-4
            text-white
            overflow-hidden 
            text-xl
            space-y-3
            ${menuVisible ? "max-h-screen" : "max-h-0 py-0"}
            sm:max-h-screen
            sm:space-x-6
            sm:space-y-0
            sm:justify-end
          `}
    >
      {children}
    </ul>
  );
}
