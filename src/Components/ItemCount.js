import './styles/ItemCount.css'
import React, {useState} from 'react'

const ItemCount = ({initial,stock , onAdd}) => {
    const [count, setCount] = useState(initial)

    const decrease = () => {
        setCount(count -1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    return(
        <div className='contador'>
            <button disabled={count <= 1} onClick={decrease} className="count-button">-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase} className="count-button">+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)} className="add-button">Agregar a Carrito</button>
            </div>
        </div>


    );
}

export default ItemCount