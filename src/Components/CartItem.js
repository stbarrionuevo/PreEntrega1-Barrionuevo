import React from "react";
import { useCartContext } from "../Context/CartContext";
import './styles/Cart.css'



const CartItem = ({product}) =>{
    const {removeProduct} = useCartContext();
     return (
        <div>
            <img src={product.image} alt={product.title} />
                <div>
                    <p className="p-cart">Título: {product.title}</p>
                    <p className="p-cart">Cantidad: {product.quantity}</p>
                    <p className="p-cart">Precio u.: {product.price}</p>
                    <p className="p-cart">Subtotal: $ {product.price * product.quantity}</p>
                    <button className="boton" onClick={() => removeProduct(product.id)}>Eliminar</button>
                </div>
                
        </div>
    )
}

export default CartItem