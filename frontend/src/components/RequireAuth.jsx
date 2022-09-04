import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  //   const location = useLocation();

  return allowedRoles.find((role) => allowedRoles.includes(auth.role)) ? (
    <Outlet />
  ) : (
    <Navigate to="/signup" />
  );
};

export default RequireAuth;

// auth.role === allowedRoles[0] || auth.role === allowedRoles[1]
