import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './styles/CartWidget.css'


const CartWidget = () => {
    return(
      
        <FontAwesomeIcon icon={faCartShopping} className="cartWidget"/> 
    )
}

export default CartWidget