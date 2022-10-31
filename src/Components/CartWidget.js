import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './styles/CartWidget.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'

const CartWidget = () => {
    const{totalProducts } = useCartContext();

    return(
      
        <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} className="cartWidget"/> 
        <span className="widget">{totalProducts() || ''}</span>
        </Link>
    )
}



export default CartWidget