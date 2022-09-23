import { Link, Outlet } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import useAuth from "../hooks/useAuth";
import DataContext from "../context/DataContext";
import { useContext } from "react";

const Groupomania = () => {
  const { auth } = useAuth();
  const { disconnect } = useContext(DataContext);

  return (
    <>
      <header className="groupomania-header">
        <h1>Groupomania</h1>
        <div className="block-disconnect">
          <button onClick={disconnect}>
            <MdLogout /> Déconnexion
          </button>
          {auth.role === "admin" ? (
            <button>
              <Link to="/groupomania/admin">
                <GrUserAdmin /> Administration
              </Link>
            </button>
          ) : null}
        </div>
        <div className="block-userid">
          <p>{auth.userName}</p>
          <p>{auth.role}</p>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Groupomania;
