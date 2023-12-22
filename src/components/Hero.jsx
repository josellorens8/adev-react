import './Hero.css'
import space from '../assets/Imagenes/ref/spaces.jpg'
import principal from '../assets/Imagenes/Imgs/ImgPrincipal.png'

function Hero() {

    return (
        <>
            <div class="hero">
                <h1 class="hero__title">Cluster empresarial de desarrollo de videojuegos</h1>
                <div class="hero__images">
                    <a href=""><img src={space} alt="1" /></a>
                    <a href=""><img src={space} alt="2" /></a>
                    <a href=""><img src={space} alt="3" /></a>
                    <a href=""><img src={space} alt="4" /></a>
                    <a href=""><img src={space} alt="5" /></a>
                    <a href=""><img src={space} alt="6" /></a>
                </div>
                <a class="hero__clusterinfo" href=""><strong>Conoce más de los cluster</strong></a>
            </div>
            <div class="glide">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        <li class="glide__slide"><img src={principal} alt="" srcset="" /></li>
                        <li class="glide__slide"><img src={principal} alt="" srcset="" /></li>
                        <li class="glide__slide"><img src={principal} alt="" srcset="" /></li>
                    </ul>
                </div>
                <div class="glide__bullets" data-glide-el="controls[nav]">
                    <button class="glide__bullet" data-glide-dir="=0"></button>
                    <button class="glide__bullet" data-glide-dir="=1"></button>
                    <button class="glide__bullet" data-glide-dir="=2"></button>
                </div>
            </div>
        </>
    )
}

export default Hero