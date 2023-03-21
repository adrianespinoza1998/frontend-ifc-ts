import { useRouteError } from "react-router-dom";
import { IError } from "../../init";
import { ErrorComponent } from "./ErrorComponent";

export const ErrorContainer = () => {
  const error = useRouteError() as IError;
  console.error(error);
  return <ErrorComponent error={error} />;
};
