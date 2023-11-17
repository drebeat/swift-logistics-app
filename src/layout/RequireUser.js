import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireUser = ({ allowedRole }) => {
  const { auth } = useAuth();
  const location = useLocation();
  // console.log(allowedRole.includes(auth?.role));
  // console.log(allowedRole);
  // console.log(auth?.role);
  return allowedRole.includes(auth?.role) ? (
    <Outlet />
  ) : (
    <Navigate to="/user-login" state={{ prevURL: location.pathname }} />
  );
};

export default RequireUser;
