import { Link, Outlet } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import useAuth from "../hooks/useAuth";
import DataContext from "../context/DataContext";
import { useContext } from "react";

const Groupomania = () => {
  const { auth } = useAuth();
  const { disconnect } = useContext(DataContext)

  return (
    <>
      <header className="groupomania-header">
        <h1>Groupomania</h1>
        <div>
          <button onClick={disconnect}>
            <MdLogout />
          </button>
          {auth.role === "admin" ? (
            <button>
              <Link to="/groupomania/admin">
                <GrUserAdmin />
              </Link>
            </button>
          ) : null}
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Groupomania;
