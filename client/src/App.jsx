import { Routes, Route} from 'react-router'
import './App.css'

import { UserContext, useUserContext } from './contexts/userContext';

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Register from './components/Register'
import NotFound from './components/NotFound'
import Catalog from './components/Catalog'
import Login from './components/Login'
import Edit from './components/Edit'
import Create from './components/Create';
import Details from './components/Details';

import Logout from './components/Logout';
import { ToastContainer } from 'react-toastify';
import usePersistedState from './hooks/usePersistedState';
import UserProvider from './providers/UserProvider';

import AuthGuard from './components/guards/AuthGuard'
import GuestGuard from './components/guards/GuestGuard'

function App() {
 /*const [authData, setAuthData] = usePersistedState('auth', {});

const userLoginHandler = (resultData) => {
  setAuthData(resultData)
}

const userLogoutHandler = () => {
  setAuthData({});
}*/

  return (
    <UserProvider>
    <div className="bg-white">
      
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/about' element={<About />} />
        <Route path='/:groupId/details' element={<Details />} />
        <Route path='*' element={<NotFound />} />
        <Route element={<AuthGuard />}>
          <Route path='/create' element={<Create />} />
          <Route path='/logout' element={<Logout/>} />
          <Route path='/:groupId/edit' element={<Edit />} />
        </Route>
        <Route element={<GuestGuard />}>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register />} />
          </Route>
      </Routes>
      <ToastContainer/>
    </div>
    </UserProvider>
  );
}

export default App
