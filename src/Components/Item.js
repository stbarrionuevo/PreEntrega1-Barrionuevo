import './styles/Item.css'
import { Link } from 'react-router-dom'
import React from 'react'

const Item = ({info}) =>{
    return (
    <>
        <div className='contenedor-item'>
        <Link to={`/item/${info.id}`}>
            <img className='item-img' src={info.image} alt=""/>
        </Link>
            <div>
             <p className='item-info-p'>{info.title} Categoría: {info.categoria}</p>
        
             <Link to={`/item/${info.id}`} className="link">
                <p className='item-info-p'>{info.description} | VER MÁS |</p>
             </Link>
            </div>
        </div>
    </>
    )
}

export default Item