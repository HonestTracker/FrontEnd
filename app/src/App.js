import React from "react";
import "./App.css";
import AppRouter from "./Router";

function App() {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold">Welkom bij mijn React-project</h1>

      <AppRouter />
    </div>
  );
}

export default App;
