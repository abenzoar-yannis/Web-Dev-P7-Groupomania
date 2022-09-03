import { useNavigate } from 'react-router-dom'

import NewAccountBtn from './NewAccountBtn'

const Login = ({ email, setEmail, passeword, setPasseword, userApiRequest, connexion }) => {
    const navigate = useNavigate();
  return (
    <>
        <h2>Connexion</h2>
        
        <form action="post">
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
                <label htmlFor="passeword">Mot de passe</label>
                <input
                    autoFocus
                    type="text"
                    required
                    name="passeword"
                    id="passeword"
                    placeholder='Mot de passe'
                    value={passeword}
                    onChange={(e) => setPasseword(e.target.value)}
                />
            </div>
            <button
                className="btn-submit"
                onClick={
                    (e) => {
                        e.preventDefault();
                        userApiRequest(email, passeword, 'login')
                        navigate('/groupomania')
                    }
                }
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