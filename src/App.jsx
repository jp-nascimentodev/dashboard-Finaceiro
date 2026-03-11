import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registrar from './pages/Registrar/Registrar'
import NavBar from './components/NavBar'
import Relatorios from './pages/Relatorios/Relatorios'
import Comparacoes from './pages/Comparacoes/Comparacoes'

function App() {
  

  return (
    <div className='bg-emerald-700 w-screen h-screen flex'>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Registrar/>}/>
          <Route path='/relatorios' element={<Relatorios/>} />
          <Route path='/comparaoces' element={<Comparacoes/>}/>
        </Routes>
      
      </BrowserRouter>

      
    </div>
  )
}

export default App
