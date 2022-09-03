import { useNavigate } from 'react-router-dom'

import ConnectionBtn from './ConnectionBtn'

const Signup = ({ newEmail, setNewEmail, newPasseword, setNewPasseword, userApiRequest }) => {
    const navigate = useNavigate();
  return (
    <>
        <h2>Créer votre compte</h2>
        
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
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
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
                    value={newPasseword}
                    onChange={(e) => setNewPasseword(e.target.value)}
                />
            </div>
            <button
                className="btn-submit"
                onClick={
                    (e) => {
                        e.preventDefault();
                        userApiRequest(newEmail, newPasseword, 'signup');
                        navigate('/groupomania')
                    }
                }
            >
                Créer le compte
            </button>
        </form>

        <nav className='login-block-nav'>
            <ConnectionBtn />
        </nav>
    </>
  )
}

export default Signup