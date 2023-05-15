import { createContext } from "react";

interface IMyContext {
  someValue: string;
  someMethod: (clr: string) => void;
}
export const MyContext = createContext<IMyContext>({
  someValue: "",
  someMethod: () => {},
});
