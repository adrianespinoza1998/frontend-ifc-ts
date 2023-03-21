import { useState } from "react";
import { IAuth, PropsChildren } from "../../init";
import { logout } from "../../utils/login";
import { getParsedCookie, createCookie } from "../../utils/utils";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }: PropsChildren) => {
  const [auth, setAuth] = useState<IAuth | null>(
    getParsedCookie("auth") as IAuth | null
  );
  const saveAuth = (authParam: IAuth) => {
    console.log(authParam);
    createCookie("auth", authParam, 4);
    setAuth(authParam);
  };

  return (
    <AuthContext.Provider value={{ auth, saveAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
