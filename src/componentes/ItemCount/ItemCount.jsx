
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
    return <div>
        <button className="btn btn-outline-info" onClick={sumar}> + </button>
        {contador}
        <button className="btn btn-outline-info" onClick={resta}> - </button>
        <br />
        <br />
        <button className="btn btn-outline-info" onClick={agregarCarrito}><i className="fas fa-cart-plus"></i></button>
    </div>

}

export default ItemCount