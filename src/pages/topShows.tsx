import React from "react";
import useShows from "../hooks/useShows";
import Showcase from "../components/Showcase";

export default function TopShows() {
  const topShows = useShows({ type: "top shows" });

  return (
    <div>
      <Showcase title="Top shows" shows={topShows} />
    </div>
  );
}
