// En itemListContainer voy a consultar mi base de dato y se lo mando a ItemList el array por medio de (  )
import React, { useState, useEffect } from "react"
import "../ItemListContainer/Item.css"
import ItemList from "../ItemList/Itemlist"
import consultarBDD from "../assets/funciones"

const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    useEffect(() => {

        consultarBDD().then(products => {
            const productsList = products.filter(prod => prod.stock > 0)
            const cardProductos = ItemList({ productsList })
            setProductos(cardProductos)
        })
    },[]);

    return (
        <>
            <div>
                <h1>{greeting}</h1>
            </div>
            <div className='row cardProductos'>
                {productos}
            </div>
        </>
    )
}

export default ItemListContainer