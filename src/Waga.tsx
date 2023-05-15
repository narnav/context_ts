import React, { useContext } from "react";
import { MyContext } from "./MyContext";
const Waga = () => {
  const { someValue, someMethod } = useContext(MyContext);

  return (
    <div>
      Waga
      <button onClick={() => someMethod("green")}> Green </button>
      <button onClick={() => someMethod("red")}> red </button>
      <button onClick={() => someMethod("yellow")}> yellow </button>
    </div>
  );
};

export default Waga;
