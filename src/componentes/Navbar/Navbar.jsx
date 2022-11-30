
import Categorias from "../categorias/Categorias"
import CartWidget from "../CartWidget/CartWidget"

import "../Navbar/Navbar.css"
const Navbar = () => {

    return <header >
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="" alt="" className="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Categorias/>
                    <CartWidget />
                </div>
            </div>
            
        </nav>
    </header>
}

export default Navbar