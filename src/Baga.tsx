import React, { useContext } from "react";
import { MyContext } from "./MyContext";

const Baga = () => {
  const { someColor, cngColor } = useContext(MyContext);
  return <div>{someColor} was select</div>;
};

export default Baga;
