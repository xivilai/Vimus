import React, { useState, useRef } from "react";
import { useQuery } from "react-query";

import SearchIcon from "../icons/Search";
import CloseIcon from "../icons/Close";
import useWindowSize from "../../hooks/useWindowSize";
import LookupOverlay from "./LookupOverlay";
import LookupResult from "./LookupResult";
import { search, ISearchResult } from "../../controllers/search";
import "../../assets/animations/flashing-dots.css";

export default function Search() {
  const windowSize = useWindowSize();
  const [isMobileDevice, setIsMobileDevice] = useState();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
  const queryTimeoutRef = useRef<NodeJS.Timeout>();
  const [query, setQuery] = useState("");
  const { isLoading, refetch, error, data } = useQuery<Array<ISearchResult>>(
    query,
    () => search(query),
    { enabled: false }
  );

  function handleQueryChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const query = evt.target.value;
    setQuery(query);
    setIsSearchbarOpen(true);

    if (queryTimeoutRef.current) {
      clearTimeout(queryTimeoutRef.current);
    }

    queryTimeoutRef.current = setTimeout(() => {
      if (query !== "") {
        refetch();
      }
    }, 500);
  }

  const handleLookupOverlayClose = React.useCallback(
    () => setIsSearchbarOpen(false),
    []
  );

  React.useEffect(() => {
    setIsMobileDevice(windowSize.width && windowSize.width < 1024);
  }, [windowSize.width]);

  return (
    <div className="search ml-auto mr-2 lg:ml-auto lg:mr-8 sm:order-2 lg:order-none lg:w-[350px] lg:shrink-0 lg:grow lg:ml-4 sm:ml-2">
      <button
        className="open-searchbar p-4 block lg:hidden"
        onClick={() => {
          setIsSearchbarOpen(true);
          searchInputRef?.current?.focus();
        }}
      >
        <SearchIcon />
      </button>

      <div
        className={`searchbar-container flex absolute lg:static ${
          isSearchbarOpen ? "open z-20" : "closed -z-30"
        } top-0 left-0 w-full h-full`}
      >
        <div
          id="searchbar"
          className={`${
            isSearchbarOpen ? "max-w-full" : "max-w-0"
          } w-full lg:max-w-[100%] hover:outline outline-1 outline-[#366aaa] transition-[max-width] duration-300 top-0 left-0  bg-[#2c2c2c] relative`}
        >
          <form
            id="nav-search-form"
            method="get"
            action="/find"
            className="flex"
          >
            <input
              type="text"
              value={query}
              onChange={handleQueryChange}
              ref={searchInputRef}
              placeholder="Search Vimus"
              className="w-full h-full p-4 lg:p-3  bg-inherit outline-none text-white"
            />
          </form>

          <button
            className="p-4 lg:p-3 block ml-auto absolute top-0 right-0"
            onClick={
              isMobileDevice
                ? () => setIsSearchbarOpen(false)
                : () => {
                    setIsSearchbarOpen(true);
                    refetch();
                  }
            }
          >
            {isMobileDevice ? <CloseIcon /> : <SearchIcon />}
          </button>
        </div>

        <LookupOverlay
          open={query !== "" && isSearchbarOpen}
          onClose={handleLookupOverlayClose}
        >
          {isLoading && (
            <div className="flex mt-20 w-full items-center justify-center">
              <div className="dot-flashing"></div>
            </div>
          )}
          {error && (
            <div className="flex mt-20 justify-center">Error: {error}</div>
          )}

          {data?.map((show) => (
            <LookupResult
              key={show.id}
              id={show.id}
              poster={show.image}
              title={show.title}
              year={show.description.replace(/[^0-9]/g, "")}
              topActors={show.starList?.map((s) => s.name).slice(0, 3)}
            />
          ))}
        </LookupOverlay>
      </div>
    </div>
  );
}
