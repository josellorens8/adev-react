import Blueprints from './components/Blueprints'
import Cursos from './components/Cursos'
import Header from './components/Header'
import Home from './components/Home'
import Cluster from './components/Cluster'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Videojuegos from './components/Videojuegos'
import Eventos from './components/Eventos'

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
        <Route path='/videojuegos' element={<Videojuegos />} />
        <Route path='/eventos' element={<Eventos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
