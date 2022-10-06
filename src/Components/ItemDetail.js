import React from 'react'


const ItemDetail = ({data}) =>{
    return(
        <div className='container'>
            <div className='detail'>
                <img className='detail__image' src={data.image} alt=""/>
                <div className='container'>
                    <h1 className='detail__title'>{data.title} {data.precio}</h1>
                    <p className='detail__p dp'>Talle: {data.talle}</p>
                    <p className='detail__p dp'>Quedan: {data.disponible} unidades</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;

