import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav";
import Groupomania from "./pages/Groupomania";
import Thread from "./components/Thread";
import Admin from "./components/Admin";
import RequireAuth from "./components/RequireAuth";


import DataContext from "./context/DataContext";
import { useEffect, useContext } from "react"

const App = () => {

  const { setAuth, navigate, ROLES } = useContext(DataContext);

  useEffect(() => {
    const myAuth = JSON.parse(sessionStorage.getItem("groupomaniaId"));
    setAuth({ userId: myAuth.userId , role: myAuth.role , accessToken: myAuth.accessToken });
    navigate("/groupomania");
  }, [setAuth])


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index path="/" element={<Nav />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route
          element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Admin]} />}
        >
          <Route path="/groupomania" element={<Groupomania />}>
            <Route
              element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Admin]} />}
            >
              <Route index element={<Thread />} />
            </Route>
            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
              <Route path="admin" element={<Admin />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
