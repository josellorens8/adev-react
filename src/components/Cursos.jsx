import './Cursos.css';
import Academia from '../assets/Imagenes/Imgs/ImgAcademia.png'
import Spaces from '../assets/Imagenes/ref/spaces.jpg'
import {Link} from 'react-router-dom'

function Cursos() {

    return (
      <>
        <div className="cursos__hero">
        <img src={Academia}/>
        <div className="cursos__filtro">
            <h1 className="cursos__hero__title">Formación academica ADEV</h1>
            <p className="cursos__hero__text">Crecer en el desarrollo del videojuego nunca fue tan fácil</p>
        </div>
    </div>
    <main className="container">
        <section className="cursos__categoria">
            <h1 className="categoria__titulo">Programación</h1>
            <div className="categoria__cards">
                <div className="card__item">
                    <Link to="/blueprints"><img src={Spaces}/></Link>
                    <h3>Titulo</h3>
                    <p>Descripcion</p>
                </div>
                <div className="card__item">
                    <Link to="/blueprints"><img src={Spaces}/></Link>
                    <h3>Titulo</h3>
                    <p>Descripcion</p>
                </div>
                <div className="card__item">
                    <Link to="/blueprints"><img src={Spaces}/></Link>
                    <h3>Titulo</h3>
                    <p>Descripcion</p>
                </div>
                <div className="card__item">
                    <Link to="/blueprints"><img src={Spaces}/></Link>
                    <h3>Titulo</h3>
                    <p>Descripcion</p>
                </div>
            </div>
        </section>
        <section className="cursos__categoria">
            <h1 className="categoria__titulo">Narrativa</h1>
            <div className="categoria__cards">
                <div className="card__item">
                    <Link to="/blueprints"><img src={Spaces}/></Link>
                    <h3>Titulo</h3>
                    <p>Descripcion</p>
                </div>
                <div className="card__item">
                    <Link to="/blueprints"><img src={Spaces}/></Link>
                    <h3>Titulo</h3>
                    <p>Descripcion</p>
                </div>
                <div className="card__item">
                    <Link to="/blueprints"><img src={Spaces}/></Link>
                    <h3>Titulo</h3>
                    <p>Descripcion</p>
                </div>
                <div className="card__item">
                    <Link to="/blueprints"><img src={Spaces}/></Link>
                    <h3>Titulo</h3>
                    <p>Descripcion</p>
                </div>
            </div>
        </section>
    </main>
      </>
    )
  }
  
  export default Cursos