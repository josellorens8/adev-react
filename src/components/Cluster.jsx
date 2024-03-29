import './Cluster.css';
import ClusterImg from '../assets/Imagenes/Imgs/ImgCluster.png'
import Cards from './Cards';

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
                    <Cards />
                </section>
            </main>
        </>
    )
}

export default Cluster