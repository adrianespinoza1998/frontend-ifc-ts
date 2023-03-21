import { createContext, useContext } from "react";
import { AuthContextType, IAuth } from "../../init";

export const AuthContext = createContext<AuthContextType>({
  auth: null,
  saveAuth: (auth: IAuth) => {},
  logout: (name: string) => {},
});

export const useAuthContext = () => useContext(AuthContext);
