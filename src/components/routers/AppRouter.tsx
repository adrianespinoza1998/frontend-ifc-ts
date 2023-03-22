import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginScreen } from "../../screens/LoginScreen";
import { ErrorContainer } from "../Error/ErrorContainer";
import { HomeScreen } from "../../screens/HomeScreen";
import AuthProvider from "../auth/AuthProvider";
import { PrivateRouter } from "./PrivateRouter";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthProvider children={<LoginScreen />} />,
      errorElement: <ErrorContainer />,
    },
    {
      path: "/home",
      element: (
        <AuthProvider children={<PrivateRouter children={<HomeScreen />} />} />
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
