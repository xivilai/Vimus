import React from 'react'
import useShows from "../hooks/useShows";
import Showcase from "../components/Showcase";

export default function NewReleases() {
  const newReleases = useShows({ newReleases: true });
    
  return (
    <div>
      <Showcase title="New Releases" shows={newReleases} />
    </div>
  )
}