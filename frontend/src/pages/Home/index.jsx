import Header from "../../components/Header"
import { Link, Outlet } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <Header />
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
            </nav>
            <Outlet />
    </>
  )
}

export default Home