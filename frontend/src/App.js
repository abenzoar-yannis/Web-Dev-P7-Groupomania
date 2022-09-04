import { Routes, Route, useNavigate } from "react-router-dom";

import { useState } from "react";

import LandingPage from "./pages/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav";
import Groupomania from "./pages/Groupomania";
import axios from "axios";

const App = () => {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNewAccount, setIsNewAccount] = useState("");
  const [signupErrorMessage, setSignupErrorMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const navigate = useNavigate();
  const authURL = "http://localhost:3000/api/auth";

  /* create a new account function */
  const createNewAccount = async (e) => {
    e.preventDefault();

    const newAccount = { email: newEmail, password: newPassword };

    try {
      const response = await axios.post(`${authURL}/signup`, newAccount);
      setIsNewAccount(response.data.message);
      setSignupErrorMessage("");
      setNewEmail("");
      setNewPassword("");
      navigate("/login");
    } catch (err) {
      if (
        err.response.data.error.errors.email.kind === "unique" &&
        err.response.data.error.errors.email.path === "email"
      ) {
        setSignupErrorMessage("Cette adresse email dispose déjà d'un compte .");
      } else if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  /* Connexion function */
  const accountConnexion = async (e) => {
    e.preventDefault();
    setLoginErrorMessage("");
    setIsNewAccount("");

    const infoLogin = { email: email, password: password };

    try {
      const response = await axios.post(`${authURL}/login`, infoLogin);
      const dataId = response.data;
      const JSONdataId = JSON.stringify(dataId);
      /* Je met pour l'instant l'ID et le TOKEN en localStorage (Où alors ?) */
      localStorage.setItem("groupomaniaId", JSONdataId);
      setEmail("");
      setPassword("");
      navigate("/groupomania");
    } catch (err) {
      if (err.response) {
        setLoginErrorMessage(err.response.data.message);
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index path="/" element={<Nav />} />
          <Route
            path="login"
            element={
              <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                accountConnexion={accountConnexion}
                isNewAccount={isNewAccount}
                loginErrorMessage={loginErrorMessage}
              />
            }
          />
          <Route
            path="signup"
            element={
              <Signup
                newEmail={newEmail}
                setNewEmail={setNewEmail}
                newPassword={newPassword}
                setNewPassword={setNewPassword}
                createNewAccount={createNewAccount}
                signupErrorMessage={signupErrorMessage}
              />
            }
          />
        </Route>
        <Route path="/groupomania" element={<Groupomania />} />
      </Routes>
    </div>
  );
};

export default App;
