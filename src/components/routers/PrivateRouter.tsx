import { PropsChildren, AuthContextType } from "../../init";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";
import AuthProvider from "../auth/AuthProvider";
export const PrivateRouter = ({ children }: PropsChildren) => {
  const context = useContext(AuthContext) as AuthContextType;

  if (!context) {
    return <Navigate to="/" replace />;
  }

  return <AuthProvider>{children}</AuthProvider>;
};
