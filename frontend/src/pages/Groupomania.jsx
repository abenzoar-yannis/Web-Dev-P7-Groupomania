import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Groupomania = () => {
  const { auth } = useAuth();
  return (
    <div>
      <h1>Groupomania</h1>
      <p>
        Bienvenue {auth.role} n°{auth.userId},<br />
        avec le token : {auth.accessToken}
      </p>

      {auth.role === "admin" ? (
        <nav>
          <Link to="/groupomania/admin">Admin Page</Link>
        </nav>
      ) : null}
      <Outlet />
    </div>
  );
};

export default Groupomania;
