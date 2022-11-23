import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return <>

        <ul className='navbar-nav me-auto'>
            <li className="nav-link">
                <ShoppingCartIcon color="dark" fontSize="large" />
            </li>
             <p>0</p>
        </ul>
    </>



}

export default CartWidget