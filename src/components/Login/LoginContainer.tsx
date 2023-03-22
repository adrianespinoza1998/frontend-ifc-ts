import { LoginForm } from "./LoginForm";
import { FormEventHandler, useContext } from "react";
import { useAuthContext, AuthContext } from "../auth/AuthContext";
import { getCredentials } from "../../utils/login";
import { useNavigate } from "react-router-dom";
import { createCookie } from "../../utils/utils";

export const LoginContainer = () => {
  const { saveAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const correo = data.get("email")?.toString() || "";
    const contrasena = data.get("password")?.toString() || "";

    const credentials = await getCredentials(correo, contrasena);

    if (credentials === null) return;

    //console.log(credentials);

    //createCookie("auth", credentials, 4);
    saveAuth(credentials);
    navigate("/home/sexo");
  };

  return <LoginForm handleSubmit={handleSubmit} />;
};
