import React from "react";
import Best from "./components/Best";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Best/>
      <Featured/>
      <Footer/>
    </div>
  );
}

export default App;
