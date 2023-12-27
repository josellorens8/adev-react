import Blueprints from './components/Blueprints'
import Cursos from './components/Cursos'
import Header from './components/Header'
import Home from './components/Home'
import Cluster from './components/Cluster'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cursos' element={<Cursos />} />
        <Route path='/blueprints' element={<Blueprints />} />
        <Route path='/cluster' element={<Cluster />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
