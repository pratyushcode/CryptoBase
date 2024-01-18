import { useState } from 'react'
import { BrowserRouter as Router ,Routes,Route} from"react-router-dom"


import './App.css'
import HomePage from './Pages/HomePage'
import CoinPage from './Pages/CoinPage'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen  h-screen bg-black overflow-x-hidden'>
    <Router>
      <Header/>
      <Routes>
        
        <Route path='/' element={<HomePage/>} exact></Route>
        <Route path='/CoinPage/:id' element={<CoinPage/>}></Route>
      </Routes>
    </Router>
      
    </div>
  )
}

export default App
