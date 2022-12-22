import { useContext, useState, createContext  } from "react";

const CarritoContext = createContext()

export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = (props) => {
    const [carrito, setCarrito] = useState([]);
    //VerCantidad - Agregar productos - Eliminar producto - 
    //Vaciar el carrito - FinalizarCompra - Buscar producto

    //Retorna producto (V) o undefined (F)
    const isInCart = (id) => {
        return carrito.find(producto => producto.id === id)    
    }
    //FUNCION PARA AGREGAR UN PRODUCTO AL CARRITO
    const addItem = (producto, cantidad) => {
        if(isInCart(producto.id)) {
            const indice = carrito.findIndex(prod => prod.id === producto.id)
            const aux = [...carrito]
            aux[indice].cant = cantidad
            setCarrito(aux)
        } else {
            const nuevoProducto = {
                ...producto, cant : cantidad
            }
            //SIMULA UN PUSH
            setCarrito([...carrito,nuevoProducto])
        }
    }
    // FUNCION PARA VACIAR ARRAY/CARRITO
    const emptyCart = () => {
        setCarrito([])
    }
    //FUNCION PARA ELIMINAR UN ELEMENTO DEL []/CARRITO
    const removeItem = (id) => {
        setCarrito(carrito.filter(prod => prod.id !== id))
    }

    //FUNCION PARA RETONAR LA CANTIDAD DE PRODUCTO QUE HAY EN EL CARRITO
    const getItemQuantity = () => {
        return carrito.reduce((acum,prod) => acum += prod.cant, 0)
    }

    //FUNCION PARA CALCULAR PRECIO TOTAL
    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
    }
    console.log(carrito);
    
    return (
        <CarritoContext.Provider value={{carrito, isInCart, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
            {props.children}
        </CarritoContext.Provider>
    )

}