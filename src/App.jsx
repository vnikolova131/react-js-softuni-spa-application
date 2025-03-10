import { Routes, Route} from 'react-router'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <div className="bg-white">
      < Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<h1>Hello</h1>} />
      </Routes>
      
    </div>
  )
}

export default App

