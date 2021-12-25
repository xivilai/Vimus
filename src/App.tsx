import React from "react";
import Header from "./components/header";
import Categories from "./components/categories";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />

      <main>
        <div className="showcase">
          <h2 className="showcase__title">Showcase title 1</h2>

          <ul className="showcase__list">

          </ul>
        </div>

        <div id='subscribe'>
          <h2>Subscribe to our newsletter</h2>
          <input type='text' placeholder="your email" />
          <button>Subscribe</button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
