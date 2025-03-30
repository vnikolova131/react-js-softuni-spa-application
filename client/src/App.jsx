import { Routes, Route} from 'react-router'
import {Spin } from "antd";
import './App.css'

import { UserContext } from './contexts/userContext';

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
import { useState } from 'react';
import Logout from './components/Logout';


function App() {
 const [authData, setAuthData] = useState({});

const userLoginHandler = (resultData) => {
  setAuthData(resultData)
}

  return (
    <UserContext.Provider value={{...authData, userLoginHandler}}>
    <div className="bg-white">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create' element={<Create />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/:groupId/details' element={<Details />} />
        <Route path='/:groupId/edit' element={<Edit />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
    </UserContext.Provider>
  );
}

export default App

/*function App() {
  const [pending, groups] = useFetch(url);

Spin
  return (
    <div className="bg-white">
      < Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <>
        <pending
        ? <Spin />
        : <Route path='/catalog' element={<Catalog groups={groups}/>} />
        }
        </>
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </div>
  )
}*/