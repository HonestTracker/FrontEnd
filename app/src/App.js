import React from "react";
import "./App.css";
import AppRouter from "./utils/navigation/Router";
import "./utils/constants/styles/globals.css";

function App() {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <AppRouter />
    </div>
  );
}

export default App;
