import LogoAdev from '../assets/Imagenes/Logo Adev/ADEVblanco.png'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <header className="header">
        <div className="header-cont container">
    
            <div className="header__logo">
                <Link to="/">
                <img src={LogoAdev} alt="Logo Adev"/>
                </Link>
            </div>
            <nav className="header__navbar">
                <ul className="navbar__list">
                    <li><Link id="bttCluster" to="#"><strong>Cluster</strong></Link></li>
                    <span>|</span>
                    <li><Link id="bttVj" to="#"><strong>Videojuegos</strong></Link></li>
                    <span>|</span>
                    <li><Link id="BttCourse" to="/cursos"><strong>Cursos</strong> </Link></li>
                    <span>|</span>
                    <li><Link id="bttEvents" to="#"><strong>Eventos</strong></Link></li>
                <span>|</span>
                <li><Link id="bttNews" to="#"><strong>Noticias</strong></Link></li>
            </ul>
        </nav>
        
  
        <div className="header__switch">
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider"></span>
                
            </label>
        </div>
    </div>
    </header>
    )
  }
  
  export default Header