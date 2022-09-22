
import './styles/NavBar.css'
import './CartWidget'
import CartWidget from './CartWidget'

const NavBar = () =>{
    return( 
 <nav className="navbar navbar-expand-lg bg-dark fixed-top">
  
  <div className="container-fluid">
    
    <a className="navbar-brand li-estilo" href="index.html">
        <b className="b-estilo">Kanki Store</b></a>
        <button className="navbar-toggler menu-hamburguesa" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
        </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link li-estilo" href="#destacado">Destacados</a>
             </li>
            
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle li-estilo" href="ayuda.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Indumentaria Deportiva
                </a>
            <ul className="dropdown-menu li-estilo" aria-labelledby="navbarDropdown">
                    <li >
                        <a className="dropdown-item li-a" href="">Camisetas</a>
                    </li>

                    <li >
                        <a className="dropdown-item li-a" href="">Musculosas</a>
                    </li>
                     <li className="li-a">
                        <a className="dropdown-item li-a" href="">Buzos</a>
                    </li>
                  
                     <li className="li-a">
                        <a className="dropdown-item li-a" href="">Abrigos</a>
                    </li>
                  
                     <li className="li-a">
                        <a className="dropdown-item li-a" href="">Pantalones</a>
                    </li>
                     <li className="li-a">
                        <a className="dropdown-item li-a" href="">Zapatillas</a>
                    </li>
            </ul>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle li-estilo" href="ayuda.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Indumentaria Urbana</a>
                
                <ul className="dropdown-menu li-estilo" aria-labelledby="navbarDropdown">
                    <li>
                        <a className="dropdown-item li-a" href="">Remeras</a>
                    </li>
                     <li className="li-a">
                        <a className="dropdown-item li-a" href="">Chombas</a>
                    </li>
                    <li className="li-a">
                        <a className="dropdown-item li-a" href="">Hoodies</a>
                    </li>
                    <li className="li-a">
                        <a className="dropdown-item li-a" href="">Accesorios</a>
                    </li>
                    <li className="li-a">
                        <a className="dropdown-item li-a" href="ayuda.html#tabla">Jeans</a>
                    </li>
                     <li className="li-a">
                        <a className="dropdown-item li-a" href="ayuda.html#tabla">Zapatillas</a>
                    </li>
                </ul>
              </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle li-estilo" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Ayuda</a>

                    <ul className="dropdown-menu li-estilo" aria-labelledby="navbarDropdown">
                        <li>
                            <a className="dropdown-item li-a" href="#envios">Envios a domicilio</a>
                        </li>
                        <li >
                            <a className="dropdown-item li-a" href="ayuda.html#tyc">Términos y condiciones</a>
                        </li>
                         <li className="li-a">
                            <a className="dropdown-item li-a" href="#preguntas">Preguntas frecuentes</a>
                         </li>

                         <li className="li-a">
                            <a className="dropdown-item li-a" href="#tabla">Tabla de talles</a>
                        </li>
                </ul>
              </li>

              <CartWidget/>
            </ul>
            
          </div>
        
        </div>
       
      </nav>
      
    )
}

export default NavBar