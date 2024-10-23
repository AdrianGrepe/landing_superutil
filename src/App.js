import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Catalog from "./components/Catalog";
import Colchoneta from "./components/Colchoneta";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <SearchBar />
      <Catalog />
      <Colchoneta />
      <Footer />
    </div>
  );
}

export default App;
