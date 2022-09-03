import NewAccountBtn from './NewAccountBtn'

const Login = ({ email, setEmail, password, setPassword, accountConnexion, isNewAccount, loginErrorMessage }) => {
  return (
    <>
        <h2>Connexion</h2>

        {isNewAccount ? 
            <p className="is-new-account">{isNewAccount}</p>
            : null}
        {loginErrorMessage ? 
            <p className="error-message">{loginErrorMessage}</p>
            : null}
        
        
        <form onSubmit={accountConnexion}>
            <div className="form-input-block">
                <label htmlFor="email">Adresse email</label>
                <input
                    autoFocus
                    type="text"
                    required
                    name="email"
                    id="email"
                    placeholder='Adresse email'
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
                    placeholder='Mot de passe'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                className="btn-submit"
                type='submit'
            >
                Se connecter
            </button>
        </form>

        <nav className='login-block-nav'>
            <NewAccountBtn />
        </nav>
    </>
  )
}

export default Login