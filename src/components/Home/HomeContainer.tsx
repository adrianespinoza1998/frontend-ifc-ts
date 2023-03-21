import { useAuthContext } from "../auth/AuthContext";
import { HomeComponent } from "./HomeComponent";

export const HomeContainer = () => {
  const { auth } = useAuthContext();

  return <HomeComponent />;
};
