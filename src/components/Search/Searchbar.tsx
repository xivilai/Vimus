import React, { ChangeEventHandler } from "react";

interface Props {
  open: boolean;
  query: string;
  onQueryChange: ChangeEventHandler<HTMLInputElement>;
  searchInputRef: React.Ref<HTMLInputElement>;
  children: React.ReactNode;
}

export default function Searchbar({
  children,
  open,
  query,
  onQueryChange,
  searchInputRef,
}: Props) {
  return (
    <div
      className={`searchbar-container flex absolute lg:static -z-30 ${
        open ? "z-0" : "-z-30"
      } top-0 left-0 w-full h-full`}
    >
      <div
        id="searchbar"
        className={`${
          open ? "max-w-full" : "max-w-0"
        } w-full lg:max-w-[100%] transition-[max-width] duration-300 top-0 left-0  bg-[#2c2c2c] relative overflow-hidden`}
      >
        <form id="nav-search-form" method="get" action="/find" className="flex">
          <input
            type="text"
            value={query}
            onChange={onQueryChange}
            ref={searchInputRef}
            placeholder="Search Vimus"
            className="w-[85%] h-full p-4 lg:p-3 bg-inherit outline-none text-white"
          />
        </form>
        {children}
      </div>
    </div>
  );
}
