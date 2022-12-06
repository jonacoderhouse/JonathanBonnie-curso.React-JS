
import React, { useState, useEffect } from "react"
import "../ItemListContainer/Item.css"
import ItemList from "../ItemList/Itemlist"
import consultarBDD from "../assets/funciones"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    // En itemListContainer voy a consultar mi base de dato y le mando 
    //a ItemList el array por medio de()
    const [productos, setProductos] = useState([])
    const { category } = useParams();

    useEffect(() => {
        if (category) {
            consultarBDD('../json/productos.json').then(products => {
                const productsList = products.filter(prod => prod.stock > 0)
                    .filter(prod => prod.idCategoria === category)
                const cardProductos = ItemList({ productsList })
                setProductos(cardProductos)
            })
        } else {
            consultarBDD('./json/productos.json').then(products => {
                const productsList = products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({ productsList })
                setProductos(cardProductos)
            })
        }


    }, [category]);

    return (
        <div className='row cardProductos' >
            <h1 className="greeting"> {greeting} </h1>
            {productos}
        </div>

    );
}

export default ItemListContainer