import NewAccountBtn from "./NewAccountBtn";
import DataContext from "../context/DataContext";
import axios from "axios";
import { useContext } from "react";
import useAuth from "../hooks/useAuth";
import { ImCross } from "react-icons/im";
import { BiCheckCircle } from "react-icons/bi";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    authURL,
    succesMessage,
    setSuccesMessage,
    errorMessage,
    setErrorMessage,
    navigate
  } = useContext(DataContext);
  const { setAuth } = useAuth();

  /* Connexion function */
  const accountConnexion = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccesMessage("");

    const infoLogin = { email: email, password: password };

    try {
      const response = await axios.post(`${authURL}/login`, infoLogin);
      const userId = response.data.userId;
      const role = response.data.role;
      const accessToken = response.data.token;
      const userAuthLinea = { userId, role, accessToken };
      await setAuth({ userId, role, accessToken });
      const userAuthJSON = JSON.stringify(userAuthLinea);
      /* Je met pour l'instant l'ID et le TOKEN en localStorage (Où alors ? un state ?) */
      sessionStorage.setItem("groupomaniaId", userAuthJSON);
      setEmail("");
      setPassword("");
      navigate("/groupomania");
    } catch (err) {
      if (err.response) {
        setErrorMessage(err.response.data.message);
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  return (
    <>
      <h2>Connexion</h2>

      {succesMessage ? (
        <p className="succes-message">
          <BiCheckCircle />
          {succesMessage}
        </p>
      ) : null}
      {errorMessage ? (
        <p className="error-message">
          <ImCross />
          {errorMessage}
        </p>
      ) : null}

      <form onSubmit={accountConnexion}>
        <div className="form-input-block">
          <label htmlFor="email">Adresse email</label>
          <input
            autoFocus
            type="text"
            required
            name="email"
            id="email"
            placeholder="Adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-input-block">
          <label htmlFor="password">Mot de passe</label>
          <input
            autoFocus
            type="password"
            required
            name="password"
            id="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-submit" type="submit">
          Se connecter
        </button>
      </form>

      <nav className="login-block-nav">
        <NewAccountBtn />
      </nav>
    </>
  );
};

export default Login;
