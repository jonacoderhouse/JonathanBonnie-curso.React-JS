
import Categorias from "../categorias/Categorias"
import CartWidget from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"
import logo from "../logo/mac1.png"
import  BotonDarkMode from "./Boton/BotonDarkMode"
//import {useDarkModeContext} from "../../context/DarkModeContext"

import "../Navbar/Navbar.css"
const Navbar = () => {
    //const darkMode = useDarkModeContext()
    return <header>
         <nav className= "navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link  className=' nav-link btn btn' to={"/nuevoHOme"}><img className="logo" src={logo}alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Categorias/>
                    <Link to={`/CartWidget`}> <CartWidget /></Link>
                    <BotonDarkMode/>
                </div>
            </div>
        </nav>
    </header>
}

export default Navbar