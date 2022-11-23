import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../CartWidget/CartWidget.css"

const CartWidget = () => {
    return <>

        <ul className='navbar-nav me-auto'>
            <li className="nav-link">
                <ShoppingCartIcon color="dark" fontSize="large" />
            </li>
             <p className='contador'>0</p>
        </ul>
    </>



}

export default CartWidget