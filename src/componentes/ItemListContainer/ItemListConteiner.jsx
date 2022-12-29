
import React, { useState, useEffect } from "react"
import "../ItemListContainer/Item.css"
import ItemList from "../ItemList/Itemlist"
//import consultarBDD from "../assets/funciones"
import { useParams } from "react-router-dom"
import { getProductos } from '../../componentes/assets/firebase';

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const { category } = useParams();
    // En itemListContainer voy a consultar mi base de dato y le mando 
    //a ItemList el array por medio de()
    useEffect(() => {
        if (category) {
            getProductos().then(products => {
                const productsList = products.filter(prod => prod.stock > 0)
                    .filter(prod => prod.idCategoria === category)
                const cardProductos = ItemList({ productsList })
                setProductos(cardProductos)
            })
        } else {
            getProductos().then(products => {
                const productsList = products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({ productsList })
                setProductos(cardProductos)
            })
        }
            //cargarBDD().then(productos => console.log(productos)) //Cargo mi bade de dato de firabase
            //getProductos().then(productos=>console.log(productos));
            
            /*  Metodo de actualizacion de prueba
                getProducto("4yGGt8Rm1qtu9ECpRU3C").then(prod => {
                prod.stock -= 16
                delete prod.id
                updateProducto("4yGGt8Rm1qtu9ECpRU3C", prod).then(estado => console.log(estado))
            })*/

    }, [category]);


    return (
        <div className='row cardProductos' >
            <h1 className="greeting"> {greeting} </h1>
            {productos}
        </div>

    );
}

export default ItemListContainer