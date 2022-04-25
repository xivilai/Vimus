import React from "react";
import { useLocation } from 'react-router-dom';

type Props = {
  open: Boolean;
  onClose: Function;
  children: React.ReactNode;
};

export default function LookupOverlay({ open, onClose, children }: Props) {
  const location = useLocation();

  React.useEffect(() => {
    onClose();
  }, [location, onClose])

  if (open) {
    return <ul id="lookup-overlay" className="bg-[#2c2c2c] min-h-screen overflow-hidden z-10 absolute top-full w-full left-0">{children}</ul>;
  }

  return null;
}
