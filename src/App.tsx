import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
