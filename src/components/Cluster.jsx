import './Cluster.css';
import ClusterImg from '../assets/Imagenes/Imgs/ImgCluster.png'
import Spaces from '../assets/Imagenes/ref/spaces.jpg'
import { Link } from 'react-router-dom'

function Cluster() {

    return (
        <>
            <div className="cluster__hero">
                <img src={ClusterImg} />
                <div className="cluster__filtro">
                    <h1 className="cluster__hero__title">Nuestro cluster</h1>
                    <p className="cluster__hero__text">Crecer en el desarrollo del videojuego nunca fue tan fácil</p>
                </div>
            </div>
            <main className="container">
                <section className="cluster__categoria">
                    <h1 className="categoria__titulo">Empresas</h1>
                    <div className="categoria__cards">
                        <div className="card__item">
                            <Link to="/blueprints"><img src={Spaces} /></Link>
                            <h3>Titulo</h3>
                            <p>Descripcion</p>
                        </div>
                        <div className="card__item">
                            <Link to="/blueprints"><img src={Spaces} /></Link>
                            <h3>Titulo</h3>
                            <p>Descripcion</p>
                        </div>
                        <div className="card__item">
                            <Link to="/blueprints"><img src={Spaces} /></Link>
                            <h3>Titulo</h3>
                            <p>Descripcion</p>
                        </div>
                        <div className="card__item">
                            <Link to="/blueprints"><img src={Spaces} /></Link>
                            <h3>Titulo</h3>
                            <p>Descripcion</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Cluster