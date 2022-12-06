import React from 'react';
import { Link } from 'react-router-dom';

const Categorias = ({ opciones }) => {
        return (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-Link">
                                <button className="btn btn-outline-info"><Link className="nav-Link" to={"/"}><i className="fas fa-home fa-lg"></i></Link></button>
                        </li>
                        <li className="nav-Link">

                                <button className='btn btn-outline-info'><Link className="nav-Link" to={"/category/Lapto"}><i className="fas fa-laptop fa-lg"></i></Link></button>

                        </li>
                        <li className="nav-Link">

                                <button className='btn btn-outline-info'><Link className="nav-Link" to={"/category/Celulares"}><i className="fas fa-mobile fa-lg"></i></Link></button>

                        </li>
                        <li className="nav-Link">

                                <button className='btn btn-outline-info'><Link className="nav-Link" to={"/category/Televisores"}><i className="fas fa-tv fa-lg"></i></Link></button>

                        </li>
                        <li className="nav-Link">

                                <button className='btn btn-outline-info'><Link className="nav-Link" to={"/category/Accesorios"}><i className="fas fa-headphones fa-lg"></i></Link></button>

                        </li>
                </ul>

        );
}

export default Categorias;

