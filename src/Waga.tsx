import React, { useContext } from "react";
import { MyContext } from "./MyContext";
import { MyLogin } from './MyLogin'
import Button from '@mui/material/Button';
const Waga = () => {
  const { someColor, cngColor } = useContext(MyContext);
  const { logged,cngLog } = useContext(MyLogin);
  return (
    <div>
      Waga
      <div>
      <Button disabled={!logged} variant="contained" color="success" onClick={() => cngColor("gray")}>Gray</Button>
      <Button  disabled={!logged} variant="outlined" color="secondary" onClick={() => cngColor("green")}> Green </Button>
      <Button  disabled={!logged} variant="text" onClick={() => cngColor("red")}> red </Button>
      <Button  disabled={!logged} variant="contained" onClick={() => cngColor("yellow")}> yellow </Button>
      </div>
    </div>
  );
};

export default Waga;
