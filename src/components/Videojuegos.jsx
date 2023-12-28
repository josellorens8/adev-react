import './Cluster.css';
import JuegosImg from '../assets/Imagenes/Imgs/ImgJuegos.png'
import Cards from './Cards';

function Videojuegos() {

    return (
        <>
            <div className="cluster__hero">
                <img src={JuegosImg} />
                <div className="cluster__filtro">
                    <h1 className="cluster__hero__title">Juegos desarrollados</h1>
                    <p className="cluster__hero__text">Crecer en el desarrollo del videojuego nunca fue tan fácil</p>
                </div>
            </div>
            <main className="container">
                <section className="cluster__categoria">
                    <h1 className="categoria__titulo">Empresas</h1>
                    <Cards />
                </section>
            </main>
        </>
    )
}

export default Videojuegos