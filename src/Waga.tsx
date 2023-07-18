import React, { useContext } from "react";
import { MyContext } from "./MyContext";
import { MyLogin } from './MyLogin'

const Waga = () => {
  const { someColor, cngColor } = useContext(MyContext);
  const { logged,cngLog } = useContext(MyLogin);
  return (
    <div>
      Waga
      <div>
      <button  disabled={!logged} onClick={() => cngColor("green")}> Green </button>
      <button  disabled={!logged} onClick={() => cngColor("red")}> red </button>
      <button  disabled={!logged} onClick={() => cngColor("yellow")}> yellow </button>
      </div>
    </div>
  );
};

export default Waga;
