import ConnectionBtn from "./ConnectionBtn";

const Signup = ({
  newEmail,
  setNewEmail,
  newPassword,
  setNewPassword,
  createNewAccount,
  signupErrorMessage
}) => {
  return (
    <>
      <h2>Créer votre compte</h2>

      {signupErrorMessage ? (
        <p className="error-message">{signupErrorMessage}</p>
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
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
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
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
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
