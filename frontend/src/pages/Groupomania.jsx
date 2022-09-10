import { Link, Outlet } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import useAuth from "../hooks/useAuth";

const Groupomania = () => {
  const { auth } = useAuth();
  return (
    <>
      <header className="groupomania-header">
        <h1>Groupomania</h1>
        <div>
          <button>
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
