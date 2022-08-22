import { Link } from 'react-router-dom'
import { useState } from 'react'

const Signup = () => {
    const [newEmail, setNewEmail] = useState('')
    const [newPasseword, setNewPasseword] = useState('')
    return (
      <div>
          <h2>Signup</h2>
          <nav>
            <button>
                <Link to="/login">Login</Link>
            </button>
            <button>
                <Link to="/">Home</Link>
            </button>
          </nav>
          <form>
            <label htmlFor="email">Email</label>
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
            <label htmlFor="password">Passeword</label>
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
            <button
              type="submit"
              aria-label="entrez votre email"
            >
                Valider
            </button>
          </form>
      </div>
    )
  }
  
  export default Signup