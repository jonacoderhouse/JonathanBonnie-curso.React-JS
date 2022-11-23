import React from 'react';
import "../categorias/categorias.css"

const Categorias = () => {
    return (
        
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Casa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">specialità</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#"> <span className='color'> Contatto</span></a>
                        </li>
                    </ul>
    );
}

export default Categorias;
