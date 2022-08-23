import { Link } from 'react-router-dom'

const Signup = ({ newEmail, setNewEmail, newPasseword, setNewPasseword}) => {
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
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <label for="">Passeword</label>
        <input
          autoFocus
          type="text"
          required
          name="passeword"
          id="passeword"
          placeholder='entrez votre passeword'
          value={newPasseword}
          onChange={(e) => setNewPasseword(e.target.value)}
        />
        <div>
            <button type='submit' className="btn-submit">Create Account</button>
            <Link className="btn-cancel" to="/">Cancel</Link>
        </div>
      </form>
    )
  }
  
  export default Signup