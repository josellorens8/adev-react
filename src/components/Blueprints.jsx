import Unreal from '../assets/Imagenes/Imgs/curso-gratis-unreal-engine.jpg'
import './Blueprints.css'

function Blueprints() {
    return (
        <main className="curso__main">
            <article className="curso container">
                <p className="curso__title">Programación</p>
                    <h1 className="curso__nombre">Bluprints avanzados</h1>
                    <p className="curso__empresa">Unreal Engine 5</p>
                    <img src={Unreal} />
                    <p className="curso__descripcion">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, voluptate asperiores debitis dolorum laborum, eius dolore illum totam molestias placeat magni aut eaque fugiat. Beatae debitis autem aperiam repellendus tenetur.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, voluptate asperiores debitis dolorum laborum, eius dolore illum totam molestias placeat magni aut eaque fugiat. Beatae debitis autem aperiam repellendus tenetur.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, voluptate asperiores debitis dolorum laborum, eius dolore illum totam molestias placeat magni aut eaque fugiat. Beatae debitis autem aperiam repellendus tenetur.
                    </p>
                    <ul>
                        <p>Índice:</p>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
            </article>
        </main>
    )
}
export default Blueprints