import React from "react";
import "./App.css";
import AppRouter from "./utils/navigation/Router";
import "./utils/constants/styles/globals.css";
import "@fontsource/poppins";

function App() {
  return (
    <div className="app-container">
      <AppRouter />
    </div>
  );
}

export default App;
