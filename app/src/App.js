import React from "react";
import "./App.css";
import AppRouter from "./Router";
import Navbar from "./utils/components/navigation/Navbar";
import Footer from "./utils/components/navigation/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
