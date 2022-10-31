
import './styles/NavBar.css'
import './CartWidget'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () =>{
    return( 
 <nav className="navbar navbar-expand-lg bg-dark fixed-top">
  
  <div className="container-fluid">
    
    <NavLink className="navbar-brand li-estilo" to="/">
        <b className="b-estilo">Kanki Store</b></NavLink>
        <button className="navbar-toggler menu-hamburguesa" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
        </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link li-estilo" to="/destacado">Destacados</NavLink>
             </li>

             <li className="nav-item">
                <NavLink className="nav-link li-estilo" to="/categoria/deportiva">Indumentaria Deportiva</NavLink>
             </li>

             <li className="nav-item">
                <NavLink className="nav-link li-estilo" to="/categoria/urbana">Indumentaria Urbana</NavLink>
             </li>

             

        
               <NavLink to="/cart">
              <CartWidget/>
              </NavLink>
            </ul>
            
          </div>
        
        </div>
       
      </nav>
      
    )
}

export default NavBar