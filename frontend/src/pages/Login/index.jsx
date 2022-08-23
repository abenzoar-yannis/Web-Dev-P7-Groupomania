
import { Link } from 'react-router-dom'

const Login = ({ email, setEmail, passeword, setPasseword }) => {
    return (
      <form className="landing-page-form">
        <label for="email">Email</label>
        <input
          autoFocus
          type="text"
          required
          name="email"
          id="email"
          placeholder='entrez votre email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="">Passeword</label>
        <input
          autoFocus
          type="text"
          required
          name="passeword"
          id="passeword"
          placeholder='entrez votre passeword'
          value={passeword}
          onChange={(e) => setPasseword(e.target.value)}
        />
        <div>
            <button type='submit' className="btn-submit">Connexion</button>
            <Link className="btn-cancel" to="/">Cancel</Link>
        </div>
      </form>
    )
  }
  
  export default Login