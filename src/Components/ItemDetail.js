import React , {useState} from 'react'
import { useCartContext} from '../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';


const ItemDetail = ({data}) =>{

    const {addProduct} = useCartContext();
    const [goToCart , setGoToCart] = useState(false);


    const onAdd = (quantity) => {
        setGoToCart(true)
        addProduct(data,quantity);
    }

    return(
        <div className='container'>
            <div className='detail'>
                <img className='detail__image' src={data.image} alt=""/>
                <div className='container'>
                    <h1 className='detail__title'>{data.title}  ${data.price}</h1>
                    <p className='detail__p dp'>Categoría: {data.categoria}</p>
                    <p className='detail__p dp'>{data.description}</p>
                    <p className='detail__p dp'>Quedan: {data.stock} unidades</p>
                    {goToCart ?<Link className='detail__link' to='/cart'>- Ir a finalizar compra -</Link>: <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;

