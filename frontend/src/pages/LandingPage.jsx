import { Outlet } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
        <header className="landing-page-header">
            <h1>Groupomania</h1>
            <p>Bievenue chez Groupomania!<br/>Rejoignez vos collegues sur votre réseau social d'entreprise.</p>
        </header>
        <main>
            <div className='login-block'>
                <Outlet />
            </div>
        </main>
    </>
  )
}

export default LandingPage