import { createContext } from "react";

interface IMyContext {
  someColor: string;
  cngColor: (clr: string) => void;
}
export const MyContext = createContext<IMyContext>({
  someColor: "",
  cngColor: () => {},
});
