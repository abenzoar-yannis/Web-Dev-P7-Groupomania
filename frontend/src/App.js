import { Routes, Route } from 'react-router-dom'

import { useState } from 'react';

import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Groupomania from './pages/Groupomania';

const App = () => {
  const [newEmail, setNewEmail] = useState('')
  const [newPasseword, setNewPasseword] = useState('')
  const [email, setEmail] = useState('')
  const [passeword, setPasseword] = useState('')
  return (
    <div className='App'>
        <Routes>
            <Route path='/' element={<LandingPage />}>
                <Route path='/login' element={<Login
                email={email}
                setEmail={setEmail}
                passeword={passeword}
                setPasseword={setPasseword}
                />} />
                <Route path='/signup' element={<Signup
                newEmail={newEmail}
                setNewEmail={setNewEmail}
                newPasseword={newPasseword}
                setNewPasseword={setNewPasseword}
                />} />
            </Route>
        </Routes>
    </div>
  )
}

export default App