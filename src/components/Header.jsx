import LogoAdev from '../assets/Imagenes/Logo Adev/ADEVblanco.png'
import './Header.css'

function Header() {

    return (
        <header class="header">
        <div class="header-cont container">
    
            <div class="header__logo">
                <img src={LogoAdev} alt="Logo Adev"/>
            </div>
            <nav class="header__navbar">
                <ul class="navbar__list">
                    <li><a id="bttCluster" href="#"><strong>Cluster</strong></a></li>
                    <span>|</span>
                    <li><a id="bttVj" href="#"><strong>Videojuegos</strong></a></li>
                    <span>|</span>
                    <li><a id="BttCourse" href="#"><strong>Cursos</strong> </a></li>
                    <span>|</span>
                    <li><a id="bttEvents" href="#"><strong>Eventos</strong></a></li>
                <span>|</span>
                <li><a id="bttNews" href="#"><strong>Noticias</strong></a></li>
            </ul>
        </nav>
        
  
        <div class="header__switch">
            <label class="switch">
                <input type="checkbox"/>
                <span class="slider"></span>
                
            </label>
        </div>
    </div>
    </header>
    )
  }
  
  export default Header