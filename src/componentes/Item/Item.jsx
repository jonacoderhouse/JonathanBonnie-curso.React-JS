
import React from 'react';
import { Link } from 'react-router-dom';
//CONTEXT
import { useDarkModeContext } from "../../context/DarkModeContext";


const Item = ({prod}) => {

    const {darkMode} = useDarkModeContext()
    return (
        <div className='card mb-3 cardProducto border-light'>
                        <img src={prod.img} className="card-img-top" alt="..." />
                        <div className={` ${darkMode ? 'text-white  cardBodyDark' : 'cardBody' }`}>
                            <h5 className="card-title">{prod.nombre} {prod.modelo}</h5>
                            <p className="card-text">*{prod.marca}*</p>
                            <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                            <button className='btn btn-warning'><Link className="nav-link" to={`/productos/${prod.id}`}>Ver Producto</Link></button>
                        </div>
        </div>
    );
}

export default Item;
