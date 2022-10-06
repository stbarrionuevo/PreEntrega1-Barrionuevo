import React , {useEffect,useState} from "react";
import ItemCount from "./ItemCount";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';

const stock =  [ {
    id:1, 
    image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/64eccaf42b4a46bcbe03aad400d4d04f_9366/Campera_Presentacion_Argentina_(UNISEX)_Negro_FH8594_01_laydown.jpg",
    title: "Campera de AFA",
    talle:"L",
    precio:"$" + 4500,
    disponible:6,
  
},
 
 {  id:2 , 
    image:"https://http2.mlstatic.com/D_NQ_NP_663815-MLA48274817875_112021-W.jpg", 
    title: "Buzo Aestetich", 
    talle:"M",
    categoria:"urbana",
    precio:"$" + 3999,
    disponible:5,
    
},

{   id:3, 
    image:"https://essential.vtexassets.com/arquivos/ids/464866/306-9319_1.jpg?v=637661152319700000", 
    title: "Zapatillas Nike Air Force",
     talle: 8.5,
     categoria:"urbana",
     precio:"$" + 7100  ,
     disponible:3,
     }
]


const ItemDetailContainer = () =>{

    const [data,setData] = useState({});
    const {itemId} = useParams();
    

    useEffect(() =>{
        const getData = new Promise (resolve =>{
            setTimeout(() =>{
                resolve(stock)
            },3000);
        });
        getData.then(res => setData(res.find(stock => stock.id === parseInt(itemId))));
    },[itemId])

    const onAdd = (quantity) => {
        console.log (`Compraste ${quantity} unidades`);
    }


    return (
    <>
    <div className="container itdcontainer">
        <ItemDetail  data={data}/>
            <div className="item-count">
                <ItemCount initial={1} stock={stock.disponible} onAdd={onAdd}/>
            </div>
    </div>
    </>
    )
}
export default ItemDetailContainer;