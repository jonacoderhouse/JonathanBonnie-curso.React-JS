
import React, { useState } from "react";
const ItemCount = ({ stock }) => {

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

    const agregar = () => {
        alert("producto Agregado")
    }
    return <div>
        <button onClick={sumar}>+</button>
        {contador}
        <button onClick={resta}>-</button>
        <button onClick={agregar}>Agregar</button>

    </div>

}

export default ItemCount