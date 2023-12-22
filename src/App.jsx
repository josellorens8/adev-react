import Cursos from './components/Cursos'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cursos' element={<Cursos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
