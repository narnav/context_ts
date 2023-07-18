import React, { useState } from "react";
import "./App.css";
import { MyContext } from "./MyContext";

import Waga from "./Waga";
import Baga from "./Baga";
import { MyLogin } from "./MyLogin";
import LoginFrm from "./LoginFrm";

const App = () => {
  const [color, setcolor] = useState("red");
  const cngColor = (clr: string) => {
    setcolor(clr);
  };
  const [logged, setlogged] = useState(false)
  const cngLog = (log: boolean) => {
    setlogged(log);
  };
  return (
    <div className="App">
      <MyContext.Provider value={{ someColor: color, cngColor }}>
      <MyLogin.Provider value={{ logged: logged, cngLog }}>
        <div style={{ backgroundColor: color }}>
          <h1>{color}</h1>
        </div>
        <Waga></Waga>
        <hr></hr>

        <Baga></Baga>
        <LoginFrm></LoginFrm>
        </MyLogin.Provider>
      </MyContext.Provider>
    </div>
  );
};

export default App;
