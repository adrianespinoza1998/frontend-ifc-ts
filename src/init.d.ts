import { FormEventHandler, ReactNode } from "react";

export type PropsLogin = {
  handleSubmit: FormEventHandler<HTMLFormElement>;
};

export type PropsChildren = {
  children: ReactNode;
};

export interface IUser {
  idUsuario: number;
  nombre: string;
  apPaterno: string;
  apMaterno: string;
  correo: string;
  idRol: number;
}

export interface IAuth {
  user: IUser;
  token: string;
}

export type AuthContextType = {
  auth: IAuth | null;
  saveAuth: (authParam: IAuth) => void;
  logout: (name: string) => void;
};

export interface IError {
  message: string;
  statusText: string;
}

export type ErrorProps = {
  error: IError;
};
