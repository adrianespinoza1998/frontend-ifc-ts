import { PropsChildren, AuthContextType } from "../../init";
import { useContext } from "react";
//import { AuthContext } from "../auth/AuthProvider";
//import { Navigate } from "react-router-dom";
import AuthProvider from "../auth/AuthProvider";
import { AuthContext } from "../auth/AuthContext";
import { Navigate } from "react-router-dom";
export const PrivateRouter = ({ children }: PropsChildren) => {
  //const context = useContext(AuthContext) as AuthContextType;

  // if (!context) {
  //   return <Navigate to="/" replace />;
  // }

  const { auth } = useContext(AuthContext) as AuthContextType;

  console.log(auth);

  if (auth === null) return <Navigate to="/" />;

  return <AuthProvider>{children}</AuthProvider>;
};
