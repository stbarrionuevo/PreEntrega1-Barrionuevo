import './styles/Item.css'
import { Link } from 'react-router-dom'
import React from 'react'


const Item = ({info}) =>{

   

    return (
    <>
        <div className='container'>
            <div className='container contenedor-item'>
            <Link to={`/productos/${info.id}`}>
                <img className='item-img' src={info.image} alt=""/>
             </Link>
            <div className='container'>
             <p className='item-info-p'>{info.title} Categoría: {info.categoria}</p>
             
        
             <Link to={`/productos/${info.id}`} className="link">
                <p className='item-info-p text-center'>- {info.description} - | VER MÁS |</p>
             </Link>
             </div>
            </div>
        </div>
    </>
    )
}

export default Item