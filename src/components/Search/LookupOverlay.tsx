import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function LookupOverlay({ children }: Props) {
  return <ul id="lookup-overlay" className="bg-[#2c2c2c] overflow-hidden z-10 absolute top-full w-full left-0">{children}</ul>;
}
