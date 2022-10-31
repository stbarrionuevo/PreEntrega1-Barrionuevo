import React , {useEffect,useState} from "react";
import ItemDetail from "./ItemDetail";
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import { useParams } from 'react-router-dom';




const ItemDetailContainer = () =>{

    const [data,setData] = useState({});
    const {detalleId} = useParams();
    

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'productos', 'Mf5wv1bvLTZfNcYyRr9H');
        getDoc(queryDoc)
            .then(res => setData({id: res.id, ...res.data() }))
    },[detalleId] )

   


    return (
    <>
    <div className="container itdcontainer">
        <ItemDetail  data={data}/>
           
    </div>
    </>
    )
}
export default ItemDetailContainer;