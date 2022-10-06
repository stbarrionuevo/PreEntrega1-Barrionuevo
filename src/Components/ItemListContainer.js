import React , {useState,useEffect} from 'react';

import ItemList from './ItemList'
import { useParams } from 'react-router-dom';


const catalogo = [
    {id:1, image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/64eccaf42b4a46bcbe03aad400d4d04f_9366/Campera_Presentacion_Argentina_(UNISEX)_Negro_FH8594_01_laydown.jpg",
    title: "Campera de AFA",
    description:"Nuevo ingreso ideal para alentar en el mundial",
    categoria:"deportiva"},

    {id:2 , image:"https://http2.mlstatic.com/D_NQ_NP_663815-MLA48274817875_112021-W.jpg", 
    title: "Buzo Aesthetic", 
    description:"Conoce la nueva moda Aesthetic", 
    categoria:"urbana"},

    {id:3, image:"https://essential.vtexassets.com/arquivos/ids/464866/306-9319_1.jpg?v=637661152319700000", 
    title: "Zapatillas Nike Air Force",
    description:"Lo clásico siempre va",
     categoria:"urbana"   }
]



const ItemListContainer = (props) =>{

    const [data,setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(catalogo)
            },3000)
        });
        if (categoriaId){
            getData.then(res => setData(res.filter(catalogo => catalogo.categoria === categoriaId)));
        }else{
            getData.then(res => setData(res))
        }
    },[categoriaId])

    
    

    return( 
                <>
              
                
                <ItemList data={data}/>
               
                </>

    )
}

export default ItemListContainer