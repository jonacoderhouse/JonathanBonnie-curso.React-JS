// item recibe un OBJETO, lo voy a usar para visualiar los prodcutos, es donde voy alojar todos mis productos.
// CARD PRODUCTO
//voy a  generer una card por cada producto que tenga en stock que me llega desde ItemList

import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({prod}) => {
    return (
        <div className='card mb-3 cardProducto border-light'>
                        <img src={`../img/${prod.img}`}className="card-img-top" alt="..." />
                        <div className='card-body cardBody'>
                            <h5 className="card-title">{prod.nombre} {prod.modelo}</h5>
                            <p className="card-text">*{prod.marca}*</p>
                            <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                            <button className='btn btn-warning'><Link className="nav-link" to={`/productos/${prod.id}`}>Ver Producto</Link></button>
                        </div>
        </div>
    );
}

export default Item;
