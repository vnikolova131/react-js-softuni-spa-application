import { Routes, Route} from 'react-router'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Register from './components/Register'
import NotFound from './components/NotFound'
import Catalog from './components/Catalog'
import Login from './components/Login'


function App() {
  return (
    <div className="bg-white">
      < Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </div>
  )
}

export default App

