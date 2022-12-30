import React from 'react';
import ItemCount from "../ItemCount/ItemCount"
import {useCarritoContext} from "../../context/CarritoContex"


const ItemDetail = ({item}) => {
    const {addItem} = useCarritoContext() //CONTEXT
    
    const onAdd = (contador) => {
        addItem(item, contador)
        console.log(contador,item);
    }   
    return (
        
        <div className="row g-0">
            <div className="col-md-4 imgBody">
                <img src={item.img} alt="" className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8">
                <div className="card-body cardBodyItemDetail">
                    <h5 className="card-title cards">{item.nombre}</h5>
                    <p className="card-text">Modelo: {item.modelo} </p>
                    <p className="card-text">Marca: {item.marca} </p>
                    <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)} </p>
                    <p className="card-text">Stock: {item.stock} </p>
                    <ItemCount stock= {item.stock} onAdd={onAdd}/><br/>
                    <button className="btn btn-warning">Finalizar Compra</button>
                </div>
                
            </div>
            
        </div>
    );
    

}

export default ItemDetail;
