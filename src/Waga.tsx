import React, { useContext } from "react";
import { MyContext } from "./MyContext";
const Waga = () => {
  const { someColor, cngColor } = useContext(MyContext);

  return (
    <div>
      Waga
      <button onClick={() => cngColor("green")}> Green </button>
      <button onClick={() => cngColor("red")}> red </button>
      <button onClick={() => cngColor("yellow")}> yellow </button>
    </div>
  );
};

export default Waga;
