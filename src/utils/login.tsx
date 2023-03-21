import axios from "axios";
import { deleteCookie } from "./utils";

export const getCredentials = async (correo: string, contrasena: string) => {
  try {
    const fetch = await axios({
      url: `${import.meta.env.VITE_BACKEND_URL}/api/auth`,
      method: "POST",
      data: {
        correo,
        contrasena,
      },
    });

    return fetch.data;
  } catch (error) {
    console.warn(error);
    return null;
  }
};

export const logout = () => {
  deleteCookie("auth");
};
