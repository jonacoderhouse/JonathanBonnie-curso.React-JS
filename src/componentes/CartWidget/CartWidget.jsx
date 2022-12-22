import { useCarritoContext } from "../../context/CarritoContex";

const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    return (
        <>
            <button className="btn btn-outline-warning">
                <i className="fas fa-shopping-cart fa-lg"></i>
                {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
            </button>

        </>
    );
}

export default CartWidget