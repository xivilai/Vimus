import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import "./App.css";
import { Outlet } from "react-router-dom";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />

      <main className="px-3">
        <Outlet />

        <Subscribe />
      </main>

      <Footer />
    </div>
  );
}

export default App;
