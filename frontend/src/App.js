import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Groupomania from './pages/Groupomania';

const App = () => {
  return (
    <div className='App'>
        <Routes>
            <Route path='/' element={<Home />}>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Route>
        </Routes>
    </div>
  )
}

export default App