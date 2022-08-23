import { Link, Outlet } from 'react-router-dom'


const LandingPage = () => {
  return (
    <>  
        <header className='landing-page-header'>
        <img class="logo-titre" src="./images/icon-left-font.png" alt="Logo Groupomania" />

        </header>
        <nav className='landing-page-nav'>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
        </nav>
        <Outlet />
    </>
  )
}

export default LandingPage