import { Link } from 'react-router-dom'

const Login = () => {
    return (
      <div>
          <h2>Login</h2>
          <nav>
            <button>
                <Link to="/signup">SignUp</Link>
            </button>
            <button>
                <Link to="/">Home</Link>
            </button>

          </nav>
      </div>
    )
  }
  
  export default Login