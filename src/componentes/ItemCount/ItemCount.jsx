
import React, { useState } from "react";
const ItemCount = ({ stock, onAdd }) => {

    const [contador, setContador] = useState(1);

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const resta = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    const agregarCarrito = () => {
        onAdd(contador)
    }

    return <div className="contenedorButton">
        <button className="btn btn-outline-primary" onClick={sumar}> <i className="fas fa-plus"></i></button>
        {contador}
        <button className="btn btn-outline-primary" onClick={resta}> <i className="fas fa-minus"></i></button>
        <button className="btn btn-outline-primary" onClick={agregarCarrito}><i className="fas fa-cart-plus"></i></button>
    </div>

}

export default ItemCount