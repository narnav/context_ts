import { createContext } from "react";

interface IMyLogin {
  logged: boolean;
  cngLog: (logged: boolean) => void;
}
export const MyLogin = createContext<IMyLogin>({
  logged: false,
  cngLog: () => {},
});
