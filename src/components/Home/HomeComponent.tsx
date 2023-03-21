import { Outlet } from "react-router-dom";
import { NavbarContainer } from "../Navbar/NavbarContainer";

export const HomeComponent = () => {
  return (
    <div>
      <NavbarContainer />
      <Outlet />
    </div>
  );
};
