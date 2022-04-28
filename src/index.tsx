import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import routes from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route path={route.path} key={index} element={<route.element/>}>
            {route?.children?.map((child, index) => {
              return (
                <Route
                  path={child.path}
                  key={index}
                  index={child.index}
                  element={<child.element/>}
                />
              );
            })}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
