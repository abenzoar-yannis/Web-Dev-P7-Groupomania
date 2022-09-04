import { useContext } from "react";
import ConnectionBtn from "./ConnectionBtn";
import DataContext from "../context/DataContext";
import axios from "axios";
import { ImCross } from "react-icons/im";

const Signup = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    authURL,
    setSuccesMessage,
    errorMessage,
    setErrorMessage,
    navigate
  } = useContext(DataContext);

  /* create a new account function */
  const createNewAccount = async (e) => {
    e.preventDefault();

    const newAccount = { email: email, password: password };

    try {
      const response = await axios.post(`${authURL}/signup`, newAccount);
      setSuccesMessage(response.data.message);
      setErrorMessage("");
      setPassword("");
      navigate("/login");
    } catch (err) {
      if (
        err.response.data.error.errors.email.kind === "unique" &&
        err.response.data.error.errors.email.path === "email"
      ) {
        setErrorMessage("Cette adresse email dispose déjà d'un compte .");
      } else if (err.response) {
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
      <h2>Créer votre compte</h2>

      {errorMessage ? (
        <p className="error-message">
          <ImCross />
          {errorMessage}
        </p>
      ) : null}

      <form onSubmit={createNewAccount}>
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
          Créer le compte
        </button>
      </form>

      <nav className="login-block-nav">
        <ConnectionBtn />
      </nav>
    </>
  );
};

export default Signup;
