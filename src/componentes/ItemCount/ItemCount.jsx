
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
        <button className="btn btn-dark" onClick={sumar}>+</button>
        {contador}
        <button className="btn btn-primary" onClick={resta}>-</button>
        <button className="btn btn-dark" onClick={agregar}>Agregar</button>

    </div>

}

export default ItemCount