import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav";
import Groupomania from "./pages/Groupomania";
import Admin from "./components/Admin";
import RequireAuth from "./components/RequireAuth";

const ROLES = {
  User: "user",
  Admin: "admin"
};

const App = () => {
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
