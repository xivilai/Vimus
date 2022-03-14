import React, { useState, useRef } from "react";

import SearchIcon from "../icons/Search";
import CloseIcon from "../icons/Close";
import useWindowSize from "../../hooks/useWindowSize";
import Searchbar from "./Searchbar";

export default function Search() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
  const queryTimeoutRef = useRef<NodeJS.Timeout>();
  const [query, setQuery] = useState("");
  const windowSize = useWindowSize();
  const isMobileDevice = windowSize.width && windowSize.width < 1024;

  function handleQueryChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const query = evt.target.value;
    setQuery(query);

    if (queryTimeoutRef.current) {
      clearTimeout(queryTimeoutRef.current);
    }

    queryTimeoutRef.current = setTimeout(() => {
      console.log("searching ", query);
    }, 2000);
  }

  function performSearch() {
    console.log("searching ", query);
  }

  return (
    <div className="search ml-auto mr-2 lg:ml-auto lg:mr-6 sm:order-2 lg:order-none lg:w-[350px] lg:shrink-0 sm:ml-2">
      <button
        className="open-searchbar p-4 block lg:hidden"
        onClick={() => {
          setIsSearchbarOpen(true);
          searchInputRef?.current?.focus();
        }}
      >
        <SearchIcon />
      </button>

      <Searchbar
        open={isSearchbarOpen}
        query={query}
        onQueryChange={handleQueryChange}
        searchInputRef={searchInputRef}
      >
        <button
          className="p-4 lg:p-3 block ml-auto absolute top-0 right-0"
          onClick={
            isMobileDevice
              ? () => setIsSearchbarOpen(false)
              : () => performSearch()
          }
        >
          {isMobileDevice ? <CloseIcon /> : <SearchIcon />}
        </button>
      </Searchbar>
    </div>
  );
}
