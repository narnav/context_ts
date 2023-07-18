import React, { useState } from "react";
import "./App.css";
import { MyContext } from "./MyContext";
import Waga from "./Waga";
import Baga from "./Baga";

const App = () => {
  const [color, setcolor] = useState("red");
  const cngColor = (clr: string) => {
    setcolor(clr);
  };
  return (
    <div className="App">
      <MyContext.Provider value={{ someColor: color, cngColor }}>
        <div style={{ backgroundColor: color }}>
          <h1>{color}</h1>
        </div>
        <Waga></Waga>
        <hr></hr>

        <Baga></Baga>
      </MyContext.Provider>
    </div>
  );
};

export default App;
