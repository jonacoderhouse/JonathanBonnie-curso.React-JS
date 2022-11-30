import React,{useEffect,useState} from 'react';
import consultarBDD from '../assets/funciones';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDailConteiner = () => {
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        consultarBDD().then(productos => {
            const prod = productos.find(product => product.id === 9)
            setProducto(prod)
        })
        
    }, []);

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail item={producto} />
        </div>
    );
   

    
}

export default ItemDailConteiner;
