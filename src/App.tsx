import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import "./App.css";
import { Outlet } from "react-router-dom";
import Subscribe from "./components/Subscribe";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Header />
        <Categories />

        <main className="px-3 max-w-screen-xl mx-auto">
          <Outlet />

          <Subscribe />
        </main>

        <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
