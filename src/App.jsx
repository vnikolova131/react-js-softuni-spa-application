import { Routes, Route} from 'react-router'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Register from './components/Register'


function App() {
  return (
    <div className="bg-white">
      < Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<h1>Hello</h1>} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      
    </div>
  )
}

export default App

