import { Routes, Route } from 'react-router-dom'

import { useState } from 'react';

import userApiRequest from './utils/userApiRequest';

import LandingPage from './pages/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Nav from './components/Nav';
import Groupomania from './pages/Groupomania';
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
              <Route index path='/' element={<Nav />} />
              <Route path='login' element={<Login
              email={email}
              setEmail={setEmail}
              passeword={passeword}
              setPasseword={setPasseword}
              userApiRequest={userApiRequest}
              />} />
              <Route path='signup' element={<Signup
              newEmail={newEmail}
              setNewEmail={setNewEmail}
              newPasseword={newPasseword}
              setNewPasseword={setNewPasseword}
              userApiRequest={userApiRequest}
              />} />
            </Route>
            <Route path='/groupomania' element={<Groupomania />} />
        </Routes>
    </div>
  )
}

export default App