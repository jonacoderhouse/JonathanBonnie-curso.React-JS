import React,{useEffect,useState} from 'react';
import consultarBDD from '../assets/funciones';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";

const ItemDailConteiner = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos => {
            const prod  = productos.find(product => product.id === parseInt(id))
            setProducto(prod)
        }) 
        
    },[id]); 

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail item={producto} />
        </div>
    );
}

export default ItemDailConteiner;
