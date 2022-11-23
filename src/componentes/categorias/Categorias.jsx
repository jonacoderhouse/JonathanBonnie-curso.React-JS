import React from 'react';
import "../categorias/categorias.css"

const Categorias = ({ opciones }) => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {opciones.map((opcione) => {
                return <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">{opcione.nombre}</a>
                </li>
            })}
        </ul>
    );
}

export default Categorias;

