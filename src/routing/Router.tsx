import React from "react";
import { BrowserRouter } from "react-router-dom";

interface Props {
    children: React.ReactElement
}

export default function Router({children} : Props) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
}
