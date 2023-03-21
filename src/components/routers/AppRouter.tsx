import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginScreen } from "../../screens/LoginScreen";
import { ErrorContainer } from "../Error/ErrorContainer";
import { HomeScreen } from "../../screens/HomeScreen";
import { useState, useEffect } from "react";
import { IAuth } from "../../init";
import { getParsedCookie, createCookie } from "../../utils/utils";
import AuthProvider from "../auth/AuthProvider";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginScreen />,
      errorElement: <ErrorContainer />,
    },
    {
      path: "/about",
      element: <div>About</div>,
    },
    {
      path: "/home",
      element: (
        <AuthProvider>
          <HomeScreen />
        </AuthProvider>
      ),
      children: [
        {
          path: "sexo",
          element: <h1>Sexooooooooooooo</h1>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
