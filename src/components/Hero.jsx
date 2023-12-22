import './Hero.css'
import space from '../assets/Imagenes/ref/spaces.jpg'
import principal from '../assets/Imagenes/Imgs/ImgPrincipal.png'

function Hero() {

    return (
        <>
            <div className="hero">
                <h1 className="hero__title">Cluster empresarial de desarrollo de videojuegos</h1>
                <div className="hero__images">
                    <a href=""><img src={space} alt="1" /></a>
                    <a href=""><img src={space} alt="2" /></a>
                    <a href=""><img src={space} alt="3" /></a>
                    <a href=""><img src={space} alt="4" /></a>
                    <a href=""><img src={space} alt="5" /></a>
                    <a href=""><img src={space} alt="6" /></a>
                </div>
                <a className="hero__clusterinfo" href=""><strong>Conoce más de los cluster</strong></a>
            </div>
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        <li className="glide__slide"><img src={principal} alt="" srcset="" /></li>
                        <li className="glide__slide"><img src={principal} alt="" srcset="" /></li>
                        <li className="glide__slide"><img src={principal} alt="" srcset="" /></li>
                    </ul>
                </div>
                <div className="glide__bullets" data-glide-el="controls[nav]">
                    <button className="glide__bullet" data-glide-dir="=0"></button>
                    <button className="glide__bullet" data-glide-dir="=1"></button>
                    <button className="glide__bullet" data-glide-dir="=2"></button>
                </div>
            </div>
        </>
    )
}

export default Hero