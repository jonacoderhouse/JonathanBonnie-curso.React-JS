
import Categorias from "../categorias/Categorias"
import CartWidget from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"
import logo from "../logo/mac1.png"

import "../Navbar/Navbar.css"
const Navbar = () => {

    return <header>
        <nav className="navbar navbar-expand-lg navbar-dark header">
            <div className="container-fluid">
                <Link  className='btn btn' to={"/"}><img className="logo" src={logo}alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Categorias/>
                    <Link to={`/CartWidget`}> <CartWidget /></Link>
                </div>
            </div>
        </nav>
    </header>
}

export default Navbar