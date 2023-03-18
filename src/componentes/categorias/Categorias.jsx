import React from 'react';
import { Link } from 'react-router-dom';

const Categorias = ({ opciones }) => {
        return (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-Link">
                                <Link className="nav-Link" to={"/"}><button className="btn btn-outline-secondary"><i className="fas fa-home fa-lg"></i></button></Link>
                        </li>
                        <li className="nav-Link">

                                <Link className="nav-Link" to={"/category/Lapto"}><button className='btn btn-outline-secondary'><i className="fas fa-laptop fa-lg"></i></button></Link>

                        </li>
                        <li className="nav-Link">

                                <Link className="nav-Link" to={"/category/Celulares"}><button className='btn btn-outline-secondary'><i className="fas fa-mobile fa-lg"></i></button></Link>

                        </li>
                        <li className="nav-Link">

                                <Link className="nav-Link" to={"/category/Televisores"}><button className='btn btn-outline-secondary'><i className="fas fa-tv fa-lg"></i></button></Link>

                        </li>
                        <li className="nav-Link">

                        <Link className="nav-Link" to={"/category/Accesorios"}><button className='btn btn-outline-secondary'><i className="fas fa-headphones fa-lg"></i></button></Link>

                        </li>
                </ul>

        );
}

export default Categorias;

