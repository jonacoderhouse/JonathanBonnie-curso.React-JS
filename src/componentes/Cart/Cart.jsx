import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div>
            <h1 className='cart'>Imaginen productos</h1>
            <button className="btn btn-outline-info"><Link to={'/cart'}>Finalizar Compra</Link></button>
        </div>
    );
}

export default Cart;
