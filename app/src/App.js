import React from "react";
import "./App.css";
import AppRouter from "./Router";
import Navbar from "./utils/components/navigation/Navbar";
import Footer from "./utils/components/navigation/Footer";
import { Link } from "react-router-dom";
function App() {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <AppRouter />
    </div>
  );
}

export default App;
