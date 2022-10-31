import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, {useState}from "react"
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext"
import CartItem from "./CartItem";
import './styles/Cart.css'

const Cart = () =>{

    const {cart, totalPrice} = useCartContext();
    const [name , setName] = useState('');
    const [lastname, setLastname] = useState('')
    const [email , setEmail] = useState('');
    const [validEmail , setValidEmail] = useState('');
    const [phone , setPhone] = useState('');
    const [city , setCity] = useState('');

    const validate = (email , validEmail) =>{
        if(email !== validEmail ){ return <p className="error-message">El e-mail ingresado no coincide en ambos campos</p>}
       else{ return <p className="success-message">El e-mail coincide correctamente en ambos campos</p>}
        }

    const errorMessage = validate(email, validEmail)

    

    const order = {
        buyer:{
            name:{name},
            lastname:{lastname},
            email:{email},
            phone:{phone},
            city:{city}
        },
        items:cart.map(product => ({id:product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total:totalPrice(),
    }

    const handlerClick = () => {
        const db = getFirestore();
        const ordenesCollection = collection(db , 'ordenes');
        addDoc(ordenesCollection,order)
        .then(({ id }) => console.log(id))
        
       
    }


    if (cart.length === 0) {
        return(
            <div className="empty-cart-container container">
                <p className="p-cart p-empty">No hay nada en el carrito 🛒</p>
                <button className="boton boton-cart"><Link className="boton-link" to="/">Hacer compras</Link></button>
            </div>
        );
    }

    

    return(
        <>

        <div className="container">
            {cart.map(product => <CartItem key={product.id}product={product}/>)}
            <p className="p-cart text-center">
                Total: ${totalPrice()}
            </p>
        </div>

        <div className="container">
            <h2 className="title-order">Completá tus datos para procesar la orden de compra</h2>
        <div className="form-container">
            <form onSubmit={ev => {ev.preventDefault() }}>
                <input className="input" required type='text' name="name" placeholder="Ingrese su nombre" autoComplete="off" value={name} onChange={ev => setName(ev.target.value)}></input>
                <input className="input" required type='text' name="lastname" placeholder="Ingrese su apellido" autoComplete="off" value={lastname} onChange={ev => setLastname(ev.target.value)}></input>
                <input className="input" required type='email' name="email" placeholder="Ingrese su e-mail" autoComplete="off"  value={email} onChange={ev => setEmail(ev.target.value)}></input>
                <input className="input" required type='email' name="validEmail" placeholder="Repita su e-mail" autoComplete="off"  value={validEmail} onChange={ev => setValidEmail(ev.target.value)}></input>
                <input className="input" required type='text' name="phone" placeholder="Ingrese su celular" autoComplete="off" value={phone} onChange={ev => setPhone(ev.target.value)}></input>
                <input className="input" required type='text' name="city" placeholder="Ingrese su ciudad" autoComplete="off" value={city} onChange={ev => setCity(ev.target.value)}></input>
                <p>{errorMessage}</p>
                <button onClick={handlerClick} type="submit" className="boton">Finalizar compra</button>

            </form>
          </div>  
        </div>  
        </>
    )
};





export default Cart