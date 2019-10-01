import React from "react";
import "./App.css";
import BreedList from "./components/BreedList";
import BreedDetail from "./components/BreedDetail";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <BreedList path="/" />
        <BreedDetail path=":name" />
      </Router>
    </div>
  );
}

export default App;
