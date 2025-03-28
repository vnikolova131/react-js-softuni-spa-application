import { Routes, Route} from 'react-router'
import {Spin } from "antd";

import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Register from './components/Register'
import NotFound from './components/NotFound'
import Catalog from './components/Catalog'
import Login from './components/Login'

import Create from './components/Create';
import Details from './components/Details';


function App() {
 // const [pending, groups] = useFetch(url, []);
//console.log(groups)
  return (
    <div className="bg-white">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create' element={<Create />} />
        <Route path='/login' element={<Login />} />
        <Route path='/:groupId/details' element={<Details />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
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