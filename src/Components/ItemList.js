import Item from './Item'
import React from 'react'

const ItemList = ({data = []}) => {

    return (
    data.map(catalogo => <Item key={catalogo.id} info={catalogo}/>)
    );
}

export default ItemList